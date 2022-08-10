import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { BookingSteps } from "../../components/bookingSteps";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { TopCars } from "./topCars";
import { TopSection } from "./topSection";


const PageContainer = styled.div`
    ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    `};
`;

export function HomePage() {
    return <PageContainer>
        <Navbar></Navbar>
        <TopSection></TopSection>
        <Marginer direction="vertical" margin="4em"></Marginer>
        <BookCard></BookCard>
        <Marginer direction="vertical" margin="10em"></Marginer>
        <BookingSteps></BookingSteps>
        <Marginer direction="vertical" margin="8em"></Marginer>
        <AboutUs />
        <Marginer direction="vertical" margin="8em"></Marginer>
        <TopCars />
        <Footer />
    </PageContainer>
}