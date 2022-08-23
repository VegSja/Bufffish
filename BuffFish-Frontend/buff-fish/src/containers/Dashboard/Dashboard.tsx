import { Grid, Paper } from "@mui/material";
import Calendar from "../../components/Calendar/Calendar";
import LineChart from "../../components/Charts/Linechart";
import WorkoutTable from "../../components/Tables/WorkoutTable";

export default function Dashboard() {
    return(
        <Grid container>
            <Grid item container xs={12} spacing={6} sx={{height: "100vh", padding: "1vw"}}>
                <Grid item xs={6} sx={{height: "50%"}}>
                    <Paper sx={{height: "100%"}}>
                        <LineChart />
                    </Paper>
                </Grid>
                <Grid item xs={6} sx={{height: "50%"}}>
                    <Paper sx={{height: "100%"}}>
                        <WorkoutTable />
                    </Paper>
                </Grid>
                <Grid item xs={12} sx={{height: "50%"}}>
                    <Paper sx={{height: "100%"}}>
                        <Calendar/>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}
