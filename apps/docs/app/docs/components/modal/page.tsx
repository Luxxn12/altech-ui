"use client";

import {
  Button,
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger
} from "@altech-ui/react";

import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { snippets } from "@/content/snippets";

export default function ModalDocPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold">Modal</h1>
      <ComponentPreview>
        <Modal>
          <ModalTrigger asChild>
            <Button variant="primary">Open Modal</Button>
          </ModalTrigger>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Delete Project</ModalTitle>
              <ModalDescription>
                This action cannot be undone. Please confirm if you want to continue.
              </ModalDescription>
            </ModalHeader>
            <ModalFooter>
              <Button variant="ghost">Cancel</Button>
              <Button variant="danger">Delete</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ComponentPreview>
      <CodeBlock code={snippets.modal} />
    </article>
  );
}
