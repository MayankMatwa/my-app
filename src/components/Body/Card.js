import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Colors from "../../utils/Colors.json";

function Cards({ card, mode }) {
    return (
        <Card
            variant="outlined"
            sx={{
                width: 320,
                background: Colors[mode]["cardsBackgroundColor"],
            }}
        >
            <CardOverflow>
                <AspectRatio ratio="2">
                    <img
                        src={card["imageURL"]}
                        srcSet={card["imageURL"]}
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
                <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color={Colors[mode]["cardsFavBackgroundColor"]}
                    sx={{
                        position: "absolute",
                        zIndex: 2,
                        borderRadius: "50%",
                        right: "1rem",
                        bottom: 0,
                        transform: "translateY(50%)",
                    }}
                >
                    <Favorite
                        sx={{ color: Colors[mode]["cardsFavIconColor"] }}
                    />
                </IconButton>
            </CardOverflow>
            <Typography level="h2">
                <Link
                    href="#multiple-actions"
                    overlay
                    underline="none"
                    sx={{
                        fontSize: "md",
                        mt: 2,
                        color: Colors[mode]["cardsTitleColor"],
                    }}
                >
                    {card["title"]}
                </Link>
            </Typography>
            <Typography level="body2">
                <Link
                    href="#multiple-actions"
                    sx={{
                        mt: 0.5,
                        mb: 2,
                        color: Colors[mode]["cardsDescriptionColor"],
                    }}
                >
                    {card["description"]}
                </Link>
            </Typography>
            <Divider inset="context" />
            <CardOverflow
                variant="soft"
                sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    bgcolor: Colors[mode]["cardsBottomBackgroundColor"],
                }}
            >
                <Typography
                    level="body3"
                    sx={{
                        fontWeight: "md",
                        color: Colors[mode]["cardsViewCountColor"],
                    }}
                >
                    {card["viewCount"]} views
                </Typography>
                <Divider orientation="vertical" />
                <Typography
                    level="body3"
                    sx={{
                        fontWeight: "md",
                        color: Colors[mode]["cardsLastOpenedTime"],
                    }}
                >
                    {card["visited"].length !== 0
                        ? "Last Visit : " + card["visited"]
                        : "Read"}
                </Typography>
            </CardOverflow>
        </Card>
    );
}
export default Cards;
