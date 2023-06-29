import { useEffect, useState } from "react";
import useCharacter from "src/hooks/useCharacter";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Pagination,
  CircularProgress,
} from "@mui/material";

import { useDebounceFunction } from "src/hooks/useDebounce";

const Characters = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const { getCharacters, info, characters, loading } = useCharacter();
  const debounceCharacters = useDebounceFunction(getCharacters, 500);

  useEffect(() => {
    debounceCharacters(page);
  }, [page, debounceCharacters]);

  return (
    <>
      <Box
        sx={{
          pb: 14,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Characters
          </Typography>
        </Container>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Container maxWidth="lg">
              <Grid container spacing={4}>
                {characters.map((character) => (
                  <Grid item key={character.id} xs={12} sm={6} md={4} lg={3}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(`/${character.id}`)}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          pt: "100%",
                        }}
                        image={character.image}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {character.name}
                        </Typography>
                        <Typography>{character.species}</Typography>
                        <Typography>{character.gender}</Typography>
                        <Typography>{character.status}</Typography>
                        <Typography>
                          {character.origin?.name ?? "unknown"}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
            <Box
              position="fixed"
              component="footer"
              sx={{
                py: 3,
                px: 2,
                left: 0,
                bottom: 0,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
              }}
            >
              <Pagination
                count={info.pages}
                page={page}
                shape="rounded"
                showFirstButton
                showLastButton
                onChange={(event, page) => {
                  setPage(page);
                }}
              />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Characters;
