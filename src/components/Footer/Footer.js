import * as React from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import Colors from "../../utils/Colors.json";

function Footer({ mode, setMode }) {
    return (
        <Sheet
            variant="solid"
            invertedColors
            sx={{
                ...{
                    bgcolor: Colors[mode]["footerBackgroundColor"],
                },
                flexGrow: 1,
                p: 2,
                borderRadius: 0,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <IconButton
                    variant="soft"
                    size="sm"
                    onClick={() => {
                        const modes = ["darkMode", "lightMode"];

                        const nextColor = modes.indexOf(mode);
                        setMode(modes[nextColor + 1] ?? modes[0]);
                    }}
                    sx={{ borderRadius: "50%" }}
                >
                    {mode === "darkMode" ? (
                        <DarkModeRoundedIcon
                            sx={{ color: Colors[mode]["footerIconColor"] }}
                        />
                    ) : (
                        <LightModeRoundedIcon
                            sx={{ color: Colors[mode]["footerIconColor"] }}
                        />
                    )}
                </IconButton>
                <Divider orientation="vertical" />
                <IconButton variant="plain">
                    <LinkedInIcon
                        sx={{ color: Colors[mode]["footerIconColor"] }}
                        onClick={(event) =>
                            window.open(
                                "https://www.linkedin.com/in/mayank-matwa/",
                                "_blank"
                            )
                        }
                    />
                </IconButton>
                <IconButton variant="plain">
                    <GitHubIcon
                        sx={{ color: Colors[mode]["footerIconColor"] }}
                        onClick={(event) =>
                            window.open(
                                "https://github.com/Mayank378/",
                                "_blank"
                            )
                        }
                    />
                </IconButton>
                <Input
                    variant="soft"
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    endDecorator={
                        <Button variant="soft" aria-label="subscribe">
                            <SendIcon
                                sx={{ color: Colors[mode]["footerIconColor"] }}
                            />
                        </Button>
                    }
                    sx={{
                        ml: "auto",
                        display: { xs: "none", md: "flex" },
                        color: Colors[mode]["footerTextColor"],
                    }}
                />
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "flex-start" },
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                <Card
                    variant="soft"
                    size="sm"
                    sx={{
                        flexDirection: { xs: "row", md: "column" },
                        minWidth: { xs: "100%", md: "auto" },
                        gap: 1,
                    }}
                >
                    <AspectRatio
                        ratio="21/9"
                        minHeight={180}
                        sx={{ flexBasis: { xs: 200, md: "initial" } }}
                    >
                        <img
                            alt="https://drive.google.com/file/d/1S9v9rr5RCXdcbFRdLsGcGzdmwPhC2Izn/view?usp=share_link"
                            src="https://drive.google.com/thumbnail?id=1S9v9rr5RCXdcbFRdLsGcGzdmwPhC2Izn"
                        />
                    </AspectRatio>
                    <CardContent>
                        <Typography
                            level="body2"
                            sx={{ color: Colors[mode]["footerTextColor"] }}
                        >
                            My Resume | Currently ASE-1
                        </Typography>
                        <Typography
                            level="body3"
                            sx={{
                                mb: 0.5,
                                color: Colors[mode]["footerTextColor"],
                            }}
                        >
                            Open to Work
                        </Typography>
                    </CardContent>
                </Card>
                <List
                    size="sm"
                    orientation="horizontal"
                    wrap
                    sx={{ flexGrow: 0, "--ListItem-radius": "8px" }}
                >
                    <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
                        <ListSubheader
                            sx={{ color: Colors[mode]["footerTextColor"] }}
                        >
                            Sitemap
                        </ListSubheader>
                        <List>
                            <ListItem>
                                <ListItemButton
                                    sx={{
                                        color: Colors[mode]["footerTextColor"],
                                    }}
                                >
                                    Services
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton
                                    sx={{
                                        color: Colors[mode]["footerTextColor"],
                                    }}
                                >
                                    Blog
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton
                                    sx={{
                                        color: Colors[mode]["footerTextColor"],
                                    }}
                                >
                                    Contact us
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
                        <ListSubheader
                            sx={{ color: Colors[mode]["footerTextColor"] }}
                        >
                            Product
                        </ListSubheader>
                        <List sx={{ "--ListItemDecorator-size": "32px" }}>
                            <ListItem>
                                <ListItemButton
                                    sx={{
                                        color: Colors[mode]["footerTextColor"],
                                    }}
                                >
                                    <ListItemDecorator>
                                        <img
                                            alt="Programming Language"
                                            src="https://www.pngfind.com/pngs/m/348-3484461_png-file-svg-programming-language-icon-png-transparent.png"
                                            width="24"
                                            height="26"
                                        />
                                    </ListItemDecorator>
                                    Programming Language
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton
                                    sx={{
                                        color: Colors[mode]["footerTextColor"],
                                    }}
                                >
                                    <ListItemDecorator>
                                        <img
                                            alt="CN"
                                            src="https://drive.google.com/thumbnail?id=1yiSqXsG6HtiUlotxTXuIkEV1XYmrQjeS"
                                            width="24"
                                        />
                                    </ListItemDecorator>
                                    Computer Networks
                                    <Chip
                                        variant="soft"
                                        size="sm"
                                        sx={{
                                            minHeight: 20,
                                            fontSize: "xs2",
                                            ml: "auto",
                                            color: Colors[mode][
                                                "footerTextColor"
                                            ],
                                        }}
                                    >
                                        BETA
                                    </Chip>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton
                                    sx={{
                                        color: Colors[mode]["footerTextColor"],
                                    }}
                                >
                                    <ListItemDecorator>
                                        <img
                                            sx={{
                                                borderRadius: "5",
                                            }}
                                            alt="OS"
                                            src="https://drive.google.com/thumbnail?id=19kjdAsnN64oMJYBsw3-e84y-hwcuV07r"
                                            width="24"
                                        />
                                    </ListItemDecorator>
                                    Operating System
                                    <Chip
                                        variant="soft"
                                        size="sm"
                                        sx={{
                                            minHeight: 20,
                                            fontSize: "xs2",
                                            ml: "auto",
                                            color: Colors[mode][
                                                "footerTextColor"
                                            ],
                                        }}
                                    >
                                        BETA
                                    </Chip>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton
                                    sx={{
                                        color: Colors[mode]["footerTextColor"],
                                    }}
                                >
                                    <ListItemDecorator>
                                        <img
                                            alt="DBMS"
                                            src={
                                                mode === "lightMode"
                                                    ? "https://cdn-icons-png.flaticon.com/512/30/30659.png"
                                                    : "https://cdn-icons-png.flaticon.com/512/666/666402.png"
                                            }
                                            width="24"
                                        />
                                    </ListItemDecorator>
                                    DBMS
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton
                                    sx={{
                                        color: Colors[mode]["footerTextColor"],
                                    }}
                                >
                                    <ListItemDecorator>
                                        <img
                                            alt="OOps"
                                            src="https://drive.google.com/thumbnail?id=1hTzlv5p4ot-zPxUGxgukYU9E-nxvA8Bo"
                                            width="24"
                                        />
                                    </ListItemDecorator>
                                    OOPS
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton
                                    sx={{
                                        color: Colors[mode]["footerTextColor"],
                                    }}
                                >
                                    <ListItemDecorator>
                                        <img
                                            alt="DSA"
                                            src="https://tshahab.com/wp-content/uploads/2022/08/data-structure.png"
                                            width="24"
                                        />
                                    </ListItemDecorator>
                                    DSA
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <Typography
                    level="body2"
                    startDecorator={
                        <Typography textColor={Colors[mode]["footerTextColor"]}>
                            by
                        </Typography>
                    }
                    sx={{ color: Colors[mode]["footerTextColor"] }}
                >
                    MAYANK MATWA
                </Typography>

                <Typography
                    level="body3"
                    sx={{ ml: "auto", color: Colors[mode]["footerTextColor"] }}
                >
                    Copyright 2023
                </Typography>
            </Box>
        </Sheet>
    );
}

export default Footer;
