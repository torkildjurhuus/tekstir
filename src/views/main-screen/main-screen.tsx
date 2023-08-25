import {PageContainerStyled} from "../../styled";
import {Grid, Typography} from "@material-ui/core";

export function MainScreen() {
    return (
        <PageContainerStyled>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{marginBottom: "24px"}}>
                    <Typography
                        variant="h5"
                        style={{
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Hello world
                    </Typography>
                </Grid>
            </Grid>
        </PageContainerStyled>
    );
}
