import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { loginSchema } from '@pern-workspace/shared';
import { Formik } from 'formik';
import Head from 'next/head';

import Link from '../components/Link';
import { routes } from '../routes';
import { myMeta } from '../meta';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const Login = () => {
	const classes = useStyles();

	return (
		<>
			<Head>
				<title>Login | {myMeta.title}</title>
			</Head>
			<Container component='main' maxWidth='xs'>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Login
					</Typography>
					<Formik
						initialValues={{ email: '', password: '' }}
						validationSchema={loginSchema}
						onSubmit={(values) => {
							console.log(values);
						}}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
						}) => (
							<form className={classes.form} noValidate onSubmit={handleSubmit}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											variant='outlined'
											required
											fullWidth
											id='email'
											label='Email Address'
											type='email'
											name='email'
											autoComplete='off'
											placeholder='e.g.: johndoe@gmail.com'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
											error={!!errors.email && touched.email}
											helperText={errors.email && touched.email && errors.email}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											variant='outlined'
											required
											fullWidth
											name='password'
											label='Password'
											type='password'
											id='password'
											autoComplete='off'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.password}
											error={!!errors.password && touched.password}
											helperText={
												errors.password && touched.password && errors.password
											}
										/>
									</Grid>
								</Grid>
								<Button
									type='submit'
									fullWidth
									variant='contained'
									color='primary'
									className={classes.submit}
									disabled={isSubmitting}
								>
									Login
								</Button>
								<Grid container justify='flex-end'>
									<Grid item>
										<Link href={routes.register.path} variant='body2'>
											Don't have an account? Register
										</Link>
									</Grid>
								</Grid>
							</form>
						)}
					</Formik>
				</div>
			</Container>
		</>
	);
};

export default Login;
