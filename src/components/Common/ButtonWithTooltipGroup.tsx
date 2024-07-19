import { Box, Stack, Tooltip } from '@mui/material';
import { theme } from 'utils';

interface ButtonWithTooltipProps {
    label: string;
    icon: any;
    onClick?: () => void;
}

export interface ButtonWithTooltipGroupProps {
    buttons: ButtonWithTooltipProps[];
}

export default function ButtonWithTooltipGroup({ buttons }: ButtonWithTooltipGroupProps) {
    return (
        <Stack spacing={1}>
            {buttons?.map((btn: any, index: number) => (
                <Tooltip
                    title={btn.label}
                    arrow
                    placement="right"
                    key={index}
                    disableInteractive={true}
                >
                    <Box
                        sx={{
                            width: 40,
                            height: 40,
                            background: theme.palette.common.white,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            transition: 'background ease .25s, color ease .25s',
                            cursor: 'pointer',
                            '&:hover': {
                                color: '#fff',
                                backgroundColor: '#222',
                            },
                        }}
                    >
                        <btn.icon fontSize="small" />
                    </Box>
                </Tooltip>
            ))}
        </Stack>
    );
}
