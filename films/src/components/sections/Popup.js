import React from "react";
import {Box, ChakraProvider, extendTheme, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

const customTheme = extendTheme({
  components: {
    Modal: {
      baseStyle: {
        content: {
          padding: "20px",
          borderRadius: "8px",
        },
      },
    },
  },
});

const Popup = ({ isOpen, onClose, popupText }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ATTENTION JOSH BUNGARD</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <p>{popupText}</p>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default Popup;
