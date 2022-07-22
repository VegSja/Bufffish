export const chartTheme = (theme: any) =>
    ({
        "background": theme.palette.background.paper,
        "textColor": theme.palette.text.primary,
        "fontSize": 11,
        "axis": {
            "domain": {
                "line": {
                    "stroke": theme.palette.text.primary,
                    "strokeWidth": 1
                }
            },
            "legend": {
                "text": {
                    "fontSize": 12,
                    "fill": theme.palette.text.primary
                }
            },
            "ticks": {
                "line": {
                    "stroke": theme.palette.text.primary,
                    "strokeWidth": 1
                },
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary
                }
            }
        },
        "grid": {
            "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 1
            }
        },
        "legends": {
            "title": {
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.secondary
                }
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.secondary
            },
            "ticks": {
                "line": {},
                "text": {
                    "fontSize": 10,
                    "fill": theme.palette.text.secondary
                }
            }
        },
        "annotations": {
            "text": {
                "fontSize": 13,
                "fill": theme.palette.text.primary,
                "outlineWidth": 2,
                "outlineColor": theme.palette.text.primary,
                "outlineOpacity": 1
            },
            "link": {
                "stroke": "#000000",
                "strokeWidth": 1,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "outline": {
                "stroke": "#000000",
                "strokeWidth": 2,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "symbol": {
                "fill": "#000000",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            }
        },
        "tooltip": {
            "container": {
                "background": theme.palette.primary.dark,
                "color": theme.palette.text.secondary,
                "fontSize": 12
            },
            "basic": {},
            "chip": {},
            "table": {},
            "tableCell": {},
            "tableCellValue": {}
        }
    })
