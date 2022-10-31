import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const SectionMenuImageList = (props) => {
  return (
    <ImageList
      sx={{ px: props.isMobile ? 0 : props.isHome? 0: 7,
        py: props.isMobile ? 0 : props.isHome? 7: 7,
        overflow: "hidden" }}
      cols={props.isMobile ? 2 : 3}
      gap={props.isMobile ? 16 : 33}
    >
      {props.imgData.map((item, idx) => (
        <div
          key={idx}
          sx={{
            width: props.isMobile ? 170 : "",
            height: props.isMobile ? 171.5 : "",
          }}
        >
          <ImageListItem>
            <img
              src={`${item.img}?w=${props.isMobile ? 164 : 380}&h=${
                props.isMobile ? 164 : 380
              }&fit=crop&auto=format`}
              srcSet={`${item.img}?w=${props.isMobile ? 164 : 380}&h=${
                props.isMobile ? 164 : 380
              }&fit=crop&auto=format&dpr=2 2x`}
              loading="eager"
            />

          </ImageListItem>
        </div>
      ))}
    </ImageList>
  );
};

export default SectionMenuImageList;
