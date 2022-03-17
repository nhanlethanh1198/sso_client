import { Card, CardMedia, Container, Grid, Stack, Typography } from '@mui/material'
import { useCallback } from 'react'
import Page from 'src/components/Page'
import { SignInForm } from 'src/components/SignIn'

const SignIn = () => {

    const onSubmit = useCallback(async (data) => {

    }, [])

    return (
        <Page title='Đăng nhập' >
            <Container maxWidth='lg' sx={{}}>
                <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Grid item xs={12} md={6} container justifyContent='center'>
                        <Card elevation={0} variant='outlined'>
                            <CardMedia component='img' src='./secure_banner.png' />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} container justifyContent='center'>
                        <Stack>
                            <Typography variant='h4' align='center' gutterBottom>Đăng nhập</Typography>
                            <SignInForm onSubmit={onSubmit} />
                        </Stack>
                    </Grid>
                </Grid>

            </Container>

        </Page>
    )
}

export default SignIn