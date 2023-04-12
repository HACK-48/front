import React from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';
import FormInput from '../FormInput';
import FormSubmit from '../FormSubmit';
import { useForm } from 'react-hook-form';
import FormText from '../FormText';
import { SubmitHandler } from 'react-hook-form';

type Inputs = {
	name: string;
	email: string;
	text: string;
};

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<Box>
			<Typography
				gutterBottom
				variant='h4'
				component='h2'
				fontWeight={700}>
				Contactez-nous
			</Typography>
			<Typography
				variant='body1'
				mb={5}>
				Posez votre question en utilisant le formulaire ci-dessous :
			</Typography>
			<Grid
				container
				component='form'
				spacing={2}
				onSubmit={handleSubmit(onSubmit)}>
				<Grid
					item
					xs={12}
					sm={6}>
					<FormInput
						label='Nom'
						type='text'
						required={true}
						error={!!errors.name}
						register={register('name', {
							required: { value: true, message: 'Ce champs est requis' },
						})}
						helperText={errors.name?.message ? errors.name.message : " "}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}>
					<FormInput
						label='Email'
						type='email'
						required={true}
						error={!!errors.email}
						register={register('email', {
							required: { value: true, message: 'Ce champs est requis' },
						})}
						helperText={errors.email?.message ? errors.email.message : " "}
					/>
				</Grid>
				<Grid
					item
					xs={12}>
					<FormText
						label='Message'
						required={true}
						register={register('text', {
							required: { value: true, message: 'Ce champs est requis' },
						})}
						helperText={errors.text?.message ? errors.text.message : " "}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					sx={{ textAlign: 'center' }}
					margin='auto'>
					<FormSubmit>Envoyer</FormSubmit>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ContactForm;
