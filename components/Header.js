import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import { Button } from 'evergreen-ui';
import Link from 'next/link';

export default () => {
	return (
		<Header>
			<Link href={'/'}>
				<Logo width={150} />
			</Link>
			<nav>
				<Link href={'/private'}>
					<NavItem>Private</NavItem>
				</Link>
				<NavItem>Nav 2</NavItem>
				<NavItem>Nav 3</NavItem>
			</nav>
			<div>
				<Link href={'/login'}>
					<Button appearance="minimal">Sign In</Button>
				</Link>
				<Link href={'/login'}>
					<Button appearance="primary">Sign Up</Button>
				</Link>
			</div>
		</Header>
	);
};

const Header = styled.header`
	padding: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const NavItem = styled.a`
	text-decoration: none;
	margin: 0 8px;
	cursor: pointer;
	&:hover {
		opacity: 0.6;
	}
`;
