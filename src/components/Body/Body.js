import Cards from "./Card.js";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const items = [
    {
        imageURL:
            "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
        title: "Card 1",
        description: "Description 1",
        viewCount: "1.2k",
        upload: "1 hour ago",
    },
    {
        imageURL:
            "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
        title: "Card 2",
        description: "Description 2",
        viewCount: "2.2k",
        upload: "2 hour ago",
    },
    {
        imageURL:
            "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
        title: "Card 3",
        description: "Description 3",
        viewCount: "3.2k",
        upload: "3 hour ago",
    },
    {
        imageURL:
            "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
        title: "Card 4",
        description: "Description 4",
        viewCount: "1.4k",
        upload: "4 hour ago",
    },
    {
        imageURL:
            "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
        title: "Card 5",
        description: "Description 5",
        viewCount: "1.2k",
        upload: "1 hour ago",
    },
    {
        imageURL:
            "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
        title: "Card 6",
        description: "Description 6",
        viewCount: "1.2k",
        upload: "1 hour ago",
    },
];

function Body() {
    return (
        <div style={{ minHeight: "200px" }}>
            <Box
                sx={{
                    flexGrow: 1,
                    marginTop: "2%",
                    marginBottom: "2%",
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
                    {items.map((card) => {
                        return (
                            <Grid
                                item
                                xs="auto"
                                sm="auto"
                                md="auto"
                                lg="auto"
                                xl="auto"
                            >
                                <Item>
                                    <Cards card={card} />
                                </Item>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </div>
    );
}
export default Body;
