import { Plus } from 'lucide-react';

import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spacer,
  useDisclosure,
} from '@heroui/react';

import type { Room } from '../../models';

import './AddItemModal.scss';

const SPACER_GAP = 2;

interface AddItemModalProps {
  rooms: Room[];
}

const AddItemModal = ({ rooms }: AddItemModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="c-add-item-modal">
      <div className="c-add-item-modal__button">
        <Button color="primary" variant="flat" onPress={onOpen}>
          <Plus /> Add item
        </Button>
      </div>
      <Modal isOpen={isOpen} size="2xl" placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <div className="c-add-item-modal__content">
              <ModalHeader>Add item</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <Input isRequired label="Enter item name" type="text" />
                  <Input isRequired label="Enter item description" type="text" />
                  <Input isRequired label="Enter item link" type="text" />
                  <Input isRequired label="Enter item cost" type="text" />
                  <Autocomplete isRequired label="For which room?" placeholder="Search for a room">
                    {rooms.map((room) => (
                      <AutocompleteItem key={room.roomId}>{room.name}</AutocompleteItem>
                    ))}
                  </Autocomplete>
                </div>
              </ModalBody>
              <ModalFooter>
                <Link color="danger" onClick={onClose}>
                  Close
                </Link>
                <Spacer x={SPACER_GAP} />
                <Button color="primary" variant="flat" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export { AddItemModal };
