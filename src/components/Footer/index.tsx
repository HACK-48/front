import { Box, Paper, Typography, Link, List, ListItem } from '@mui/material';
import { Container, textAlign } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/Rectangle 26.svg';

const Footer = () => {
	return (
		<Box sx={{ mt: 'auto', background: 'black' }}>
			<Container maxWidth='xl'>
				<Box sx={{ mt: 'auto', display: 'flex', gap: 10}}>
					<img
						src={logo}
						alt='logo'
					/>
					<List>
						<ListItem>
							<Link
								component={RouterLink}
								to={'/about'}
								sx={{ textDecoration: 'none', color: 'white' }}>
								About
							</Link>
						</ListItem>
						<ListItem>
							<Link
								component={RouterLink}
								to={'/contact'}
								sx={{ textDecoration: 'none', color: 'white' }}>
								Contact
							</Link>
						</ListItem>
						<ListItem>
							<Link
								component={RouterLink}
								to={'/team'}
								sx={{ textDecoration: 'none', color: 'white' }}>
								Team
							</Link>
						</ListItem>
					</List>
				</Box>
			</Container>
			<Box>
				<Typography sx={{ textAlign: 'center', background: 'grey' }}>
					Copyright 2023 - Site crée par Hack’48 - Mentions Légales
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
