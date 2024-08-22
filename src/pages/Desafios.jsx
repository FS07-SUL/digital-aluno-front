import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'primereact/button';

import Modal from '../components/Modal/Modal';

import styled from "styled-components"
import Card from '../components/Card/Card';

const Desafios = () => {
    const [openModal, setOpenModal] = useState(false)

    const Container = styled.div`
        @media (min-width: 768px) {
            padding: 2.5rem 3.5rem;
        }

        @media (min-width: 1440px) {
            padding: 2.5rem calc((100vw - 78rem) / 2);
        }
    `



    return (
        <Container className="flex flex-column gap-6">
            <div className="flex flex-column justify-content-between sm:flex-row sm:align-items-center sm:px-4 md:px-2">
                <h1 className="text-center text-6xl">Desafios</h1>
                <div className="flex justify-content-around gap-1 px-4 sm:px-0">
                    <select name="" id="" className="flex-1 h-2rem surface-900 border-none border-round-3xl text-white text-base font-medium pl-2 cursor-pointer">
                        <option value="default" selected disabled>Filtrar por Stack</option>
                        <option value="front">Frontend</option>
                        <option value="back">Backend</option>
                    </select>
                    <select name="" id="" className="flex-1 h-2rem surface-900 border-none border-round-3xl text-white text-base font-medium pl-2 cursor-pointer">
                        <option value="default" selected disabled>Filtrar por Nível</option>
                        <option value="fácil">Fácil</option>
                        <option value="médio">Médio</option>
                        <option value="difícil">Difícil</option>
                    </select>
                </div>
            </div> 
            <div className="grid gap-4 px-5 sm:px-5 md:px-4">
                <Card>
                    <div>
                        <h2 className="m-0 font-bold text-xl">Nome do desafio</h2>
                        <p className="m-0 font-bold text-base" >Frontend</p>
                    </div>
                    <div className="flex align-items-center gap-1 justify-content-between">
                        <p className="m-0 text-xl font-bold text-400">Fácil</p>
                        <Button onClick={() => setOpenModal(true)} label="Acessar" className="w-10rem border-none border-round-3xl bg-black-alpha-90 hover:bg-primary" />
                    </div>
                </Card>

                <Card>
                    <div>
                        <h2 className="m-0 font-bold text-xl">Nome do desafio</h2>
                        <p className="m-0 font-bold text-base" >Frontend</p>
                    </div>
                    <div className="flex align-items-center gap-1 justify-content-between">
                        <p className="m-0 text-xl font-bold text-400">Fácil</p>
                        <Button onClick={() => setOpenModal(true)} label="Acessar" className="w-10rem border-none border-round-3xl bg-black-alpha-90 hover:bg-primary" />
                    </div>
                </Card>

                <Card>
                    <div>
                        <h2 className="m-0 font-bold text-xl">Nome do desafio</h2>
                        <p className="m-0 font-bold text-base" >Frontend</p>
                    </div>
                    <div className="flex align-items-center gap-1 justify-content-between">
                        <p className="m-0 text-xl font-bold text-400">Fácil</p>
                        <Button onClick={() => setOpenModal(true)} label="Acessar" className="w-10rem border-none border-round-3xl bg-black-alpha-90 hover:bg-primary" />
                    </div>
                </Card>

                <Card>
                    <div>
                        <h2 className="m-0 font-bold text-xl">Nome do desafio</h2>
                        <p className="m-0 font-bold text-base" >Frontend</p>
                    </div>
                    <div className="flex align-items-center gap-1 justify-content-between">
                        <p className="m-0 text-xl font-bold text-400">Fácil</p>
                        <Button onClick={() => setOpenModal(true)} label="Acessar" className="w-10rem border-none border-round-3xl bg-black-alpha-90 hover:bg-primary" />
                    </div>
                </Card>

                <Card>
                    <div>
                        <h2 className="m-0 font-bold text-xl">Nome do desafio</h2>
                        <p className="m-0 font-bold text-base" >Frontend</p>
                    </div>
                    <div className="flex align-items-center gap-1 justify-content-between">
                        <p className="m-0 text-xl font-bold text-400">Fácil</p>
                        <Button onClick={() => setOpenModal(true)} label="Acessar" className="w-10rem border-none border-round-3xl bg-black-alpha-90 hover:bg-primary" />
                    </div>
                </Card>

                <Card>
                    <div>
                        <h2 className="m-0 font-bold text-xl">Nome do desafio</h2>
                        <p className="m-0 font-bold text-base" >Frontend</p>
                    </div>
                    <div className="flex align-items-center gap-1 justify-content-between">
                        <p className="m-0 text-xl font-bold text-400">Fácil</p>
                        <Button onClick={() => setOpenModal(true)} label="Acessar" className="w-10rem border-none border-round-3xl bg-black-alpha-90 hover:bg-primary" />
                    </div>
                </Card>

                <Card>
                    <div>
                        <h2 className="m-0 font-bold text-xl">Nome do desafio</h2>
                        <p className="m-0 font-bold text-base" >Frontend</p>
                    </div>
                    <div className="flex align-items-center gap-1 justify-content-between">
                        <p className="m-0 text-xl font-bold text-400">Fácil</p>
                        <Button onClick={() => setOpenModal(true)} label="Acessar" className="w-10rem border-none border-round-3xl bg-black-alpha-90 hover:bg-primary" />
                    </div>
                </Card>
            </div>
            <Modal isOpen={openModal}>
                <div className="">
                    <div className="flex align-items-center justify-content-between">
                        <h1 className="m-0 font-bold text-base">nome do desafio</h1>
                        <Button onClick={() => setOpenModal(false)} className="border-none bg-white">
                            <i className="pi pi-times text-500 hover:text-primary"></i>
                        </Button>
                    </div>
                    <p className="m-0 font-bold text-sm">Frontend</p>
                </div>
                <div>
                    <p className="text-sm text-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fuga est vitae, facere nobis et ipsum totam sed omnis temporibus minima hic, itaque cum enim praesentium, maiores ab harum suscipit.</p>
                    <div className="flex justify-content-end">
                        <Link to="desafio" className="no-underline w-5 p-2 sm:p-3 text-center bg-black-alpha-90 hover:bg-primary text-white border-round-3xl">Acessar</Link>
                    </div>
                </div>
            </Modal>
        </Container>
    )
}

export default Desafios