import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@mui/material";

import useCharacter from "src/hooks/useCharacter";

const Character = () => {
  const params = useParams();
  const { getCharacter, character, loading } = useCharacter();

  console.log(character, loading);

  useEffect(() => {
    getCharacter(Number(params.id));
  }, [params.id, getCharacter]);

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
            {character.name}
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
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Card>
                    <CardMedia
                      component="div"
                      sx={{
                        pt: "100%",
                      }}
                      image={character.image}
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={9}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Species: {character.species}
                      </Typography>
                      <Typography> Gender: {character.gender}</Typography>
                      <Typography>{character.status}</Typography>
                      <Typography>
                        Origin: {character.origin?.name ?? "unknown"}
                      </Typography>
                      <Typography>
                        Location: {character.location?.name ?? "unknown"}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Episode:
                      </Typography>
                      <Grid container>
                        {character.episode?.map((episode) => (
                          <Grid key={episode.id} xs={12} sm={6} md={4} lg={3}>
                            <Card
                              sx={{
                                height: "200px",
                                display: "flex",
                                flexDirection: "column",
                                m: 1,
                                overflow: "auto",
                              }}
                            >
                              <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                  gutterBottom
                                  variant="h6"
                                  component="h3"
                                >
                                  {episode.name}
                                </Typography>
                                <Typography>{episode.episode}</Typography>
                                <Typography>
                                  Date: {episode.air_date}
                                </Typography>
                                <Typography>
                                  Characters: {episode.characters.length}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </>
        )}
      </Box>
    </>
  );
};

export default Character;
