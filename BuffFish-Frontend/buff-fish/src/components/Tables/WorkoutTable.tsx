import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useAuthContext } from '../../hooks/useAuth';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityResponse, ActivityTableEntry } from '../../data/types/Activities';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'activity_type', headerName: 'Type', flex: 0.3 },
  { field: 'distance', headerName: 'Distance', flex: 0.3, type: 'number' },
  { field: 'moving_time', headerName: 'Moving Time', flex: 0.3, type: 'number' },
];

export default function WorkoutTable() {
  const { userId } = useAuthContext();
  const [activities, setActivities] = useState([]);

  const [rows, setRows] = useState<ActivityTableEntry[]>([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  useEffect(() => {
    if (activities.length == 0) {
      return;
    }
    populateActivities();
  }, [activities]);

  const fetchActivities = () => {
    if (!userId) {
      return;
    }
    axios
      .get(`/user/${userId}/activities`)
      .then((res) => {
        setActivities(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const populateActivities = () => {
    let tmp: ActivityTableEntry[] = [];
    activities.forEach((activity, index) => {
      axios
        .get(`/user/${userId}/activities/${activity}`)
        .then((res) => {
          const act: ActivityResponse = res.data;
          tmp = [
            ...tmp,
            {
              id: index,
              name: act.name,
              activity_type: act.type,
              distance: act.distance,
              moving_time: act.moving_time,
            },
          ];
          setRows(tmp);
        })
        .catch((err) => {
          console.error(err.message);
        });
    });
  };

  return <DataGrid rows={rows} columns={columns} />;
}
