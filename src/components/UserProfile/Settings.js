import React, { useState } from 'react';
import { Box, Typography, Button, Link, TextField, Switch, Divider } from '@mui/material';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import CheckIcon from '@mui/icons-material/Check';

const VerifiedReviewerBox = () => {

    const [personalizedRecommendations, setPersonalizedRecommendations] = useState(false);
    const [latestInsights, setLatestInsights] = useState(false);
    const [newsletter, setNewsletter] = useState(false);
    const [featureUpdates, setFeatureUpdates] = useState(false);
    const [aboutTrustpilot, setAboutTrustpilot] = useState(false);
    const [reviewMilestones, setReviewMilestones] = useState(false);
    const [reviewInvitations, setReviewInvitations] = useState(false);

    return (
        <>
            <Box
                sx={{
                    width: '864px',
                    margin: '20px auto',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    textAlign: 'left',
                    backgroundColor: '#fff',
                }}
            >
                {/* Container for the icon and text */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <Box
                        sx={{
                            width: '40px',
                            height: '40px',
                            position: 'relative',
                            marginRight: '10px',
                        }}
                    >
                        <ShieldOutlinedIcon sx={{ color: 'green', width: '100%', height: '100%' }} />
                        <CheckIcon
                            sx={{
                                color: 'green',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Become a Verified Reviewer
                    </Typography>
                </Box>

                <Typography variant="body1" sx={{ marginY: '10px' }}>
                    All you need is a photo ID. Verifying helps ensure real people are writing the reviews you read, builds trust online, and lets everyone shop with confidence.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                    Your ID will never be shown on Trustpilot—we'll only display a verification badge.{' '}
                    <Link href="#" sx={{ textDecoration: 'underline', color: 'blue' }}>
                        Learn more
                    </Link>
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#2D00F7',
                        color: '#fff',
                        borderRadius: '20px',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#2D00F7',
                        },
                    }}
                >
                    Get Started
                </Button>
            </Box>
            <Box
                sx={{
                    width: '864px',
                    margin: '20px auto',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    textAlign: 'left',
                    backgroundColor: '#fff',
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    Personal Settings
                </Typography>

                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                    Your Profile Picture
                </Typography>

                <Box sx={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#6A00F4',
                            color: '#fff',
                            borderRadius: '20px',
                            flex: 1,
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#6A00F4',
                                border: '1px solid #6A00F4',
                            },
                        }}
                    >
                        Upload a New Profile Picture
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: '#F20089',
                            color: '#F20089',
                            borderRadius: '20px',
                            flex: 1,
                            '&:hover': {
                                backgroundColor: '#F20089',
                                color: '#fff',
                            },
                        }}
                    >
                        Remove My Picture for Now
                    </Button>
                </Box>

                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    disabled
                    sx={{ marginBottom: '10px' }}
                />
                <TextField
                    label="Name (Publicly Visible)"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: '10px' }}
                />
                <TextField
                    label="Instagram ID"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: '20px' }}
                />

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#2D00F7',
                        color: '#fff',
                        borderRadius: '30px',
                        padding: '10px 30px',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#2D00F7',
                        },
                    }}
                >
                    Save Information
                </Button>
            </Box>
            <Box
                sx={{
                    width: '864px', // 60% of 1440px
                    margin: '20px auto', // Center the box
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    textAlign: 'left', // Align text to the left
                    backgroundColor: '#fff', // Set background color as needed
                }}
            >
                {/* Email Settings Heading */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    Email Settings
                </Typography>

                {/* Email Description */}
                <Typography variant="body2" sx={{ marginBottom: '20px' }}>
                    Choose which kind of emails you'd like to receive. Important emails about your account are always enabled.
                </Typography>

                {/* Separator */}
                <Divider sx={{ marginBottom: '20px', backgroundColor: '#2D00F7', height: '2px' }} />

                {/* Marketing Heading */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    Marketing
                </Typography>

                {/* Marketing Description */}
                <Typography variant="body2" sx={{ marginBottom: '20px' }}>
                    We keep track of open rates for these.{' '}
                    <Link href="#" sx={{ textDecoration: 'underline', color: '#2D00F7' }}>
                        Learn more
                    </Link>
                </Typography>

                {/* Toggle Settings */}
                {[
                    {
                        label: 'Personalized recommendations',
                        description: 'Based on your preferences and activity on Trustpilot',
                        state: personalizedRecommendations,
                        setState: setPersonalizedRecommendations,
                    },
                    {
                        label: 'Latest insights',
                        description: 'Trending companies, inspiration, tips, and more',
                        state: latestInsights,
                        setState: setLatestInsights,
                    },
                    {
                        label: 'Newsletter',
                        description: 'The latest news digest',
                        state: newsletter,
                        setState: setNewsletter,
                    },
                    {
                        label: 'Feature updates',
                        description: 'New feature announcements',
                        state: featureUpdates,
                        setState: setFeatureUpdates,
                    },
                    {
                        label: 'About Trustpilot',
                        description: 'How to make the most of your account',
                        state: aboutTrustpilot,
                        setState: setAboutTrustpilot,
                    },
                ].map(({ label, description, state, setState }, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        {/* Toggle Setting Text */}
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                {label}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666' }}>
                                {description}
                            </Typography>
                        </Box>

                        {/* Toggle Switch */}
                        <Switch
                            checked={state}
                            onChange={() => setState(!state)}
                            sx={{
                                '& .MuiSwitch-thumb': {
                                    backgroundColor: state ? '#2D00F7' : '#ccc', // Active and inactive colors
                                },
                                '&:hover .MuiSwitch-thumb': {
                                    backgroundColor: state ? '#330dde' : '#bbb', // Darker on hover
                                },
                            }}
                        />
                    </Box>
                ))}
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    General
                </Typography>

                {/* Marketing Description */}
                <Typography variant="body2" sx={{ marginBottom: '20px' }}>
                    Other messages related to your account.
                </Typography>

                {/* Toggle Settings */}
                {[
                    {
                        label: 'Review milestones',
                        description: 'Stats celebrating your activity on Trustpilot',
                        state: reviewMilestones,
                        setState: setReviewMilestones,
                    },
                    {
                        label: 'Latest insights',
                        description: 'Trending companies, inspiration, tips, and more',
                        state: reviewInvitations,
                        setState: setReviewInvitations,
                    },
                ].map(({ label, description, state, setState }, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        {/* Toggle Setting Text */}
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                {label}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666' }}>
                                {description}
                            </Typography>
                        </Box>

                        {/* Toggle Switch */}
                        <Switch
                            checked={state}
                            onChange={() => setState(!state)}
                            sx={{
                                '& .MuiSwitch-thumb': {
                                    backgroundColor: state ? '#2D00F7' : '#ccc', // Active and inactive colors
                                },
                                '&:hover .MuiSwitch-thumb': {
                                    backgroundColor: state ? '#330dde' : '#bbb', // Darker on hover
                                },
                            }}
                        />
                    </Box>
                ))}
            </Box>
            <Box
                sx={{
                    width: { xs: '90%', sm: '80%', md: '70%', lg: '864px' }, // Responsive widths
                    margin: '20px auto',
                    padding: { xs: '15px', sm: '20px' }, // Adjust padding for small screens
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    textAlign: 'left',
                    backgroundColor: '#fff',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: '10px',
                        fontSize: { xs: '18px', sm: '20px', md: '22px', lg: '24px' }, // Responsive font size
                    }}
                >
                    Log Out Everywhere
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        marginBottom: '20px',
                        fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Responsive font size
                    }}
                >
                    Log out wherever you have your Trustpilot account open (this includes desktop, mobile, and any other devices).
                </Typography>

                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: 'transparent',
                        color: '#2D00F7',
                        border: '1px solid #2D00F7',
                        borderRadius: '30px',
                        padding: { xs: '5px 15px', sm: '5px 20px' }, // Responsive padding
                        textTransform: 'none',
                        fontSize: { xs: '14px', sm: '16px' }, // Responsive font size
                        fontWeight: '600',
                        '&:hover': {
                            backgroundColor: '#2D00F7',
                            color: '#fff',
                            border: '1px solid #2D00F7',
                        },
                    }}
                >
                    Log Out
                </Button>
            </Box>

            <Box
                sx={{
                    width: '864px',
                    margin: '20px auto',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    textAlign: 'left',
                    backgroundColor: '#fff',
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    Delete user
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                    When you delete your user profile, your reviews are deleted as well and can not be restored.
                </Typography>

                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: 'transparent',
                        color: '#2D00F7',
                        border: '1px solid #2D00F7',
                        borderRadius: '30px',
                        padding: '5px 20px',
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: '600',
                        '&:hover': {
                            backgroundColor: '#2D00F7',
                            color: '#fff',
                            border: '1px solid #2D00F7',
                        },
                    }}
                >
                    Delete my profile
                </Button>

            </Box>

        </>
    );
};

export default VerifiedReviewerBox;
