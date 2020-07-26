import Head from 'next/head';
import Header from '../components/Header';
import { Heading, Text } from 'evergreen-ui';
import styled from 'styled-components';
import React from 'react';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Fair Share Food</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />

			<Hero>
				<Heading is={'h1'} size={900}>
					Fair Share Food
				</Heading>
				<Text is={'p'} size={500}>
					Charity with peace of mind
				</Text>
			</Hero>
		</div>
	);
}

const Hero = styled.main``;
