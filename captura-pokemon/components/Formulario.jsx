import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const Formulario = ({elementoPokemon}) => {

    console.log("DATOS POKEMON FORMULARIO", elementoPokemon)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button  onClick={showModal}>
        CAPTURAR
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{elementoPokemon?.name}</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default Formulario;