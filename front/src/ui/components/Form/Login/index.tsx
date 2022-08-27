import { Box, Button, Container, FormControl, Grid, Stack, TextField, Typography } from "@mui/material";
import { BoxStyle, ContainerStyle, TextFieldStyle } from "./style";
import { useState } from 'react';
import { MessageTemplate } from "../../Message/index";


export default function FormLogin() {
    const [feedback, setFeedback] = useState({
        status: "",
        description: ""
    });
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const getForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return <>
        <Container sx={ContainerStyle}>
            <Grid>
                <Box sx={BoxStyle}>
                    <Typography align="center">
                        Login
                    </Typography>
                    <Stack>
                        <FormControl sx={{ alignItems: "center" }}>
                            <TextField sx={TextFieldStyle}
                                required
                                id="outlined-required"
                                label="E-mail"
                                name="email"
                                onChange={getForm}
                            />
                            <TextField sx={TextFieldStyle}
                                required
                                id="outlined-required"
                                label="Password"
                                name="password"
                                onChange={getForm}
                            />
                            <MessageTemplate message={feedback} />
                            <Button variant="contained">Log In</Button>
                        </FormControl>
                    </Stack>
                </Box>
            </Grid>
        </Container>
    </>
}