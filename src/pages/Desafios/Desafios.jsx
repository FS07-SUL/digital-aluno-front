import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

import Modal from '../../components/Modal/Modal';
import Card from '../../components/Card/Card';

import { Container } from "./styles"
import axios from 'axios';

const Desafios = () => {
    const [openModal, setOpenModal] = useState(false)
    const [desafios, setDesafios] = useState([])
    const [selectedStack, setSelectedStack] = useState("")
    const [selectedNivel, setSelectedNivel] = useState("")
    const [selectedDesafio, setSelectedDesafio] = useState(null)
    const [stackPlaceholder, setStackPlaceholder] = useState("Filtrar por Stack")
    const [levelPlaceholder, setLevelPlaceholder] = useState("Filtrar por Nível")

    const getDesafios = async () => {
        try {
            const response = await axios.get("http://localhost:8000/desafios")
            const data = response.data
            setDesafios(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDesafios()
    }, [])

    const stackOptions = [
        { value: "Frontend", label: "Frontend" },
        { value: "Backend", label: "Backend" }
    ]

    const nivelOptions = [
        { value: "Fácil", label: "Fácil" },
        { value: "Médio", label: "Médio" },
        { value: "Difícil", label: "Difícil" }
    ]

    const filterDesafios = () => {
        return desafios.filter(
            (desafio) => 
            (selectedStack === "" || desafio.desafio_stack === selectedStack) &&
            (selectedNivel === "" || desafio.desafio_nivel === selectedNivel)
        )
    }

    const handleModalContent = (desafio) => {
        setSelectedDesafio(desafio)
        setOpenModal(true)
    }

    const filteredDesafios = filterDesafios();

    const clearFilters = () => {
        setSelectedStack("")
        setSelectedNivel("")
        setStackPlaceholder("Filtrar por Stack")
        setLevelPlaceholder("Filtrar por Nível")
    }

    return (
        <Container className="flex flex-column gap-6">
            <div className="flex flex-column justify-content-between sm:flex-row sm:align-items-center sm:px-4 md:px-2">
                <h1 className="text-center text-6xl">Desafios</h1>
                <div className="flex align-items-center justify-content-around gap-1 px-4 sm:px-0">
                    <div className="flex flex-row gap-2">
                        <div>
                            <Button onClick={clearFilters} className="bg-white text-primary border-none hover:underline focus:border-none">Limpar filtros</Button>
                        </div>

                        <Dropdown 
                            value={selectedStack} 
                            options={stackOptions}
                            placeholder={stackPlaceholder}
                            className="w-13rem"
                            onChange={(stack) => setSelectedStack(stack.value)}
                            />

                        <Dropdown 
                            options={nivelOptions}
                            placeholder={levelPlaceholder}
                            value={selectedNivel}
                            className="w-13rem"
                            onChange={(nivel) => setSelectedNivel(nivel.value)}
                        />
                    </div>
                </div>
            </div> 
            <div className="grid gap-4 px-5 sm:px-5 md:px-4">

                {desafios.length === 0 ? (
                    <h2>Carregando...</h2>
                ) : filteredDesafios.length === 0 ? (
                    <h2>Nenhum desafio encontrado</h2>
                  )  : (
                    filterDesafios().map((desafio, index)=> (
                        <Card key={index}>
                            <div>
                                <h2 className="m-0 font-bold text-xl">{desafio.desafio_titulo}</h2>
                                <p className="m-0 font-bold text-base" >{desafio.desafio_stack}</p>
                            </div>
                            <div className="flex align-items-center gap-1 justify-content-between">
                                <p className="m-0 text-xl font-bold text-400">{desafio.desafio_nivel}</p>
                                <Button onClick={() => handleModalContent(desafio)} label="Acessar" className="w-10rem border-none border-round-3xl bg-black-alpha-90 hover:bg-primary" />
                            </div>
                        </Card>
                    ))
                )}

            </div>
            {openModal && selectedDesafio && (
                <Modal isOpen={openModal}>
                    <div className="">
                        <div className="flex align-items-center justify-content-between">
                            <h1 className="m-0 font-bold text-base">{selectedDesafio.desafio_titulo}</h1>
                            <Button onClick={() => setOpenModal(false)} className="border-none bg-white">
                                <i className="pi pi-times text-500 hover:text-primary"></i>
                            </Button>
                        </div>
                        <p className="m-0 font-bold text-sm">{selectedDesafio.desafio_stack}</p>
                    </div>
                    <div>
                        <p className="text-sm text-500">{selectedDesafio.desafio_descricao}</p>
                        <div className="flex justify-content-end">
                            <Link to="desafio" className="no-underline w-5 p-2 sm:p-3 text-center bg-black-alpha-90 hover:bg-primary text-white border-round-3xl">Acessar</Link>
                        </div>
                    </div>
                </Modal>
            )}
        </Container>
    )
}

export default Desafios