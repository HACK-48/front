import { Box, Paper, Typography, Link, List, ListItem } from '@mui/material';
import { Container, textAlign } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/Logo-Hack48.svg';
import logoYnov from '../../assets/images/Rectangle 49.png';
import logoSophia from '../../assets/images/Rectangle 50.png';
import logoFood from '../../assets/images/Rectangle 51.png';

const Footer = () => {
	return (
		<Box sx={{ mt: 'auto', background: 'black' }}>
			<Container maxWidth='xl' sx={{ display: 'flex', position:'relative'}} >
				<Box sx={{ mt: 'auto', display: 'flex', justifyContent:'flex-start', position:'absolute', top:'0', left:'0'}}>
					<img
						src={logo}
						alt='logo'
					/>
					<List>
						<ListItem>
							<Link
								component={RouterLink}
								to={'/'}
								sx={{ textDecoration: 'none', color: 'white' }}>
								A propos
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
								to={'/teams'}
								sx={{ textDecoration: 'none', color: 'white' }}>
								Team
							</Link>
						</ListItem>
					</List>
				</Box>
				<Box sx={{ m:'auto'}}>
					<img
						src={logoYnov}
						alt='logoYnov'
					/>
					<img
						src={logoSophia}
						alt='logoSophia'
					/>
					<img
						src={logoFood}
						alt='logoFood'
					/>
				</Box>
			</Container>
			<Box>
				<Typography
					sx={{ textAlign: 'center', background: 'black', color: 'white' }}>
					Copyright 2023 - Site crée par Hack’48 - Mentions Légales
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
