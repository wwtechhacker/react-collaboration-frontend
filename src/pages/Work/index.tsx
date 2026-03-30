import React from 'react'
import { Grid, Box, Typography } from '@mui/material'


type Props = {
    WorkRef: any;
}

const Work: React.FC<Props> = ({ WorkRef }) => {
    return (
        <>
            <Box ref={WorkRef} sx={{ padding: '40px 0' }}>
                <Typography variant="h4" mb={3} fontWeight={600} align='center'>
                    How We Work
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        width: '80%',
                        justifySelf: 'center',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(30%, 1fr))',
                        gap: 3,
                    }}
                >

                </Box>
            </Box>
        </>
    )
}

export default Work;