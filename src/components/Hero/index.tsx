// src/components/Hero/Hero.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Container, Content, ProfileImage, Buttons } from "./styles";
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from "three";

export const Hero = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                FOG({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    highlightColor: 0x0ea5e9,
                    midtoneColor: 0x111111,
                    lowlightColor: 0x000000,
                    baseColor: 0x0d1117,
                    blurFactor: 0.7,
                    speed: 1.0
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <Container ref={vantaRef}>
            <Content>
                <ProfileImage>
                    <img src="/images/perfil_1.jpg" alt="Ronald Oliveira" />
                </ProfileImage>
                <h2>Olá, eu sou Ronald Oliveira</h2>
                <p>Desenvolvedor Front-End</p>
                <Buttons>
                    <a href="#contato" className="btn">Fale comigo</a>
                    <a href="/docs/curriculo_programador.pdf" download className="btn btn-cv">Download CV</a>
                </Buttons>
            </Content>
        </Container>
    );
};
