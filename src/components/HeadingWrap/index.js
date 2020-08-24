import React from 'react';
import {
    HeadingWrapCont,
    HeadingElements,
} from './styles';
import { Container } from '../container';
import { HeadingMain } from '../../styles/';

function HeadingWrap() {
    return (
        <Container>
                <HeadingMain>
                    <span>
                        I'm multidisciplinary designer, straddling between
                        the world of brand and digital product. Currently a Brand Designer
                        at Etsy.
                    </span>
                </HeadingMain>
        </Container>
    );
}

export default HeadingWrap;
