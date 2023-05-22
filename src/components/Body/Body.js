import Cards from "./Card.js";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardsData from "../../utils/CardsData.json";
import Colors from "../../utils/Colors.json";

function Body({ mode }) {
    return (
        <div
            style={{
                minHeight: "200px",
                background: Colors[mode]["bodyBackgroundColor"],
            }}
        >
            <Box
                sx={{
                    flexGrow: 1,
                    paddingTop: "2%",
                    paddingBottom: "2%",
                }}
            >
                <Grid
                    container
                    spacing={3}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {CardsData.map((card) => {
                        return (
                            <Grid
                                key={`${card["key"]}`}
                                item
                                xs="auto"
                                sm="auto"
                                md="auto"
                                lg="auto"
                                xl="auto"
                            >
                                <Cards card={card} mode={mode} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </div>
    );
}
export default Body;
