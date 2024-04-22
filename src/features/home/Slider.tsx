import { Box } from '@mui/material';
import * as React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export interface SliderProps {}

export default function Slider(props: SliderProps) {
    return (
        <Splide
            aria-label="My Favorite Images"
            options={{
                type: 'loop',
            }}
        >
            <SplideSlide>
                <Box>
                    <img
                        src="http://blueskytechco.net/mazia/media/slidebanner/s/l/slider2.1.jpg"
                        alt="alt 1"
                    />
                </Box>
            </SplideSlide>
            <SplideSlide>
                <Box>
                    <img
                        src="http://blueskytechco.net/mazia/media/slidebanner/s/l/slider2.2.jpg"
                        alt="alt 2"
                    />
                </Box>
            </SplideSlide>

            <SplideSlide>
                <Box>
                    <img
                        src="http://blueskytechco.net/mazia/media/slidebanner/s/l/slider2.3.jpg"
                        alt="alt 3"
                    />
                </Box>
            </SplideSlide>
        </Splide>
    );
}
