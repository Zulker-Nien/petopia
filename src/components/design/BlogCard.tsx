import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import TodayIcon from "@mui/icons-material/Today";
const BlogCard = (props: any) => {
  return (
    <Card sx={{ maxWidth: 445, position: "relative" }}>
      <Box
        sx={{
          backgroundColor: "#FFDA47",
          position: "absolute",
          display: "flex",
          right: "0",
          padding: "4px 10px",
        }}
      >
        <Typography
          gutterBottom
          variant="body1"
          fontWeight={800}
          component="div"
        >
          {props.type}
        </Typography>
      </Box>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={props.image}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            paddingBottom: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PersonIcon />
            <Typography fontSize={"12px"}>{props.author}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TodayIcon />
            <Typography fontSize={"12px"}>{props.date}</Typography>
          </Box>
        </Box>
        <Typography gutterBottom variant="h6" fontWeight={800} component="div">
          {props.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
