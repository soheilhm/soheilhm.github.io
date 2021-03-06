import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
    styleReset,
    Avatar,
    Window,
    WindowContent,
    WindowHeader,
    Button,
    Toolbar,
    Divider,
    Hourglass,
    Fieldset,
    Desktop,
    Tooltip,
} from 'react95';

import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

function copyToClipboard(text, setHelper) {
    let dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    setHelper('copied to clipboard!');
}

const AboutMe = () => (
    <div>
        <p style={{ marginBottom: 10 }}>
            Hi, My name is{' '}
            <span style={{ fontWeight: 900, color: 'blue' }}>Soheil Hajimohammadi</span>. I am a
            software engineer based in Vancouver, Canada 🇨🇦.
        </p>
        <p style={{ marginBottom: 10 }}>
            Currently, I work as the director of software engineering at a canadian tech company
            called Bananatag 🍌. At Bananatag, we create communication software for enterprise
            companies. Our solution is used by big companies and household brands (e.g. GE, WorkDay,
            Twitter, …) in order to improve internal communications. We use a modern tech stack and
            we are always hiring for humble, hungry, and smart engineers.
        </p>
        <p style={{ marginBottom: 10 }}>
            I love coding and problem-solving. I have built high-quality end-to-end software
            applications from the ground up to serve enterprise needs. As the director of
            engineering at Bananatag, I lead technical initiatives among multiple engineering teams
            consisting of a lot of talented and smart engineers and I occasionally create internal
            web/CLI tools to reduce toil and improve internal processes.
        </p>
        <p>
            The software industry has been an unconventional path for me. I have navigated a lot of
            pivots in my life and my career in order to find the right niche that I both like and I
            am good at. I think the only way to grow is to feel uncomfortable and constantly place
            yourself at the edge of the unknown. I consider myself a lifelong learner and I am
            always on the lookout to expand my knowledge and discover new technologies.
        </p>
    </div>
);

function Contact() {
    const [helper, setHelper] = useState('');
    const reset = () => {
        setHelper('');
    };
    const items = [
        {
            header: 'Email',
            icon: 'logos:google-gmail',
            value: 'soheil.hm@gmail.com',
            color: null,
        },
        {
            header: 'Twitter',
            icon: 'mdi-twitter',
            value: 'https://twitter.com/soheil_hm',
            color: '#1ca1f2',
        },
        {
            header: 'LinkedIn',
            icon: 'brandico:linkedin-rect',
            value: 'https://linkedin.com/in/soheil-hajimohammadi-9b09aa59',
            color: '#0966c2',
        },
        {
            header: 'Github',
            icon: 'codicon:github-inverted',
            value: 'https://github.com/soheilhm',
            color: null,
        },
        {
            header: 'Medium',
            icon: 'carbon:logo-medium',
            value: 'https://medium.com/@soheilhm',
            color: null,
        },
    ];
    return (
        <div
            onMouseLeave={() => {
                reset();
            }}
        >
            <Fieldset
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    padding: '10px 0',
                    minHeight: 50,
                    alignItems: 'center',
                }}
            >
                {items.map((item) => (
                    <div key={item.header}>
                        <Button
                            variant="flat"
                            onMouseOver={() => {
                                setHelper(item.value);
                            }}
                            onMouseLeave={() => {
                                reset();
                            }}
                            onClick={() => {
                                if (item.value.includes('https')) {
                                    window.open(item.value);
                                } else {
                                    copyToClipboard(item.value, setHelper);
                                }
                            }}
                            style={{
                                background: 'transparent',
                                border: 'none',
                            }}
                        >
                            <span
                                class="iconify"
                                data-icon={item.icon}
                                data-inline="false"
                                width="32"
                                style={{ color: item.color }}
                            ></span>
                        </Button>
                    </div>
                ))}
            </Fieldset>
            <p style={{ textAlign: 'center', margin: '10px 0' }}>{helper}</p>
        </div>
    );
}

function App() {
    const [tab, setTab] = useState(0);
    return (
        <div
            style={{
                padding: '1rem',
                background: 'teal',
            }}
        >
            <GlobalStyles />
            <ThemeProvider theme={original}>
                <div style={{ position: 'relative', width: '100%', height: 200 }}>
                    <div
                        style={{
                            position: 'absolute',
                            left: 'calc(50% - 98px)',
                            zIndex: 99,
                            top: 0,
                        }}
                    >
                        <Desktop
                            backgroundStyles={{
                                background: 'blue',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                            width={300}
                        >
                            <Avatar
                                // size={50}
                                src={process.env.PUBLIC_URL + '/assets/profile.jpeg'}
                                style={{ width: 40, height: 40, margin: '5px auto' }}
                            />
                            <p style={{ textAlign: 'center', color: 'white', fontWeight: 300 }}>
                                Hello World !
                            </p>
                            <h3
                                style={{
                                    textAlign: 'center',
                                    color: 'white',
                                    fontWeight: 900,
                                    marginBottom: 10,
                                }}
                            >
                                soheilhm.github.io
                            </h3>
                            {/* <br /> */}
                        </Desktop>
                    </div>
                </div>

                <Window resizable className="window" style={{ width: '100%', minHeight: 200 }}>
                    <Hourglass size={26} style={{ position: 'absolute', top: 10, right: 10 }} />
                    <WindowHeader className="window-header">
                        <span>{'> Hello world!'} </span>
                    </WindowHeader>
                    <Toolbar>
                        <Button variant="menu" size="sm" onClick={() => setTab(0)}>
                            <span
                                style={{
                                    fontWeight: tab === 0 ? '700' : '500',
                                }}
                            >
                                About
                            </span>
                        </Button>
                        <Button variant="menu" size="sm" onClick={() => setTab(1)}>
                            <span
                                style={{
                                    fontWeight: tab === 1 ? '700' : '500',
                                }}
                            >
                                Contact
                            </span>
                        </Button>
                    </Toolbar>
                    <Divider />
                    <WindowContent>
                        <div
                            className="scrollbar"
                            style={{ maxHeight: '300px', overflowY: 'scroll', minHeight: 150 }}
                        >
                            {tab === 0 ? <AboutMe /> : <Contact />}
                        </div>
                    </WindowContent>
                </Window>
                <div style={{ width: 150, margin: '15px auto', outline: 'none', border: 'none' }}>
                    <Tooltip text="long live clippy !" enterDelay={100} leaveDelay={500}>
                        <img
                            width="150"
                            src={process.env.PUBLIC_URL + '/assets/clippy.png'}
                            alt="clippy"
                            style={{ transform: 'rotate(-15deg)' }}
                        />
                    </Tooltip>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
