"use client";

import * as React from "react";
import {
  Button,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger
} from "@altech-ui/react";

export function ModalDemo() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="primary">Open modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Delete project</ModalTitle>
          <ModalDescription>
            This action cannot be undone. Please confirm to continue.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="ghost">Cancel</Button>
          </ModalClose>
          <ModalClose asChild>
            <Button variant="danger">Delete</Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export function ModalPlayground() {
  const [title, setTitle] = React.useState("Delete project");
  const [description, setDescription] = React.useState("This action cannot be undone. Please confirm to continue.");
  const [radiusPx, setRadiusPx] = React.useState(10);
  const [confirmLabel, setConfirmLabel] = React.useState("Delete");

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/15 dark:bg-white/5">
      <div className="grid min-h-[320px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex items-center justify-center border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15">
          <Modal>
            <ModalTrigger asChild>
              <Button variant="primary">Open preview modal</Button>
            </ModalTrigger>
            <ModalContent style={{ "--altech-radius": `${radiusPx}px` } as React.CSSProperties}>
              <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
                <ModalDescription>{description}</ModalDescription>
              </ModalHeader>
              <ModalFooter>
                <ModalClose asChild><Button variant="ghost">Cancel</Button></ModalClose>
                <ModalClose asChild><Button variant="danger">{confirmLabel}</Button></ModalClose>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="space-y-3 p-5">
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Title" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Description" />
          <input value={confirmLabel} onChange={(e) => setConfirmLabel(e.target.value)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm" placeholder="Confirm button label" />
          <label className="grid gap-1 text-sm"><span>Radius ({radiusPx}px)</span><input type="range" min={0} max={24} value={radiusPx} onChange={(e) => setRadiusPx(Number(e.target.value))} /></label>
          <pre className="overflow-x-auto rounded-lg border border-black/10 bg-black/[.03] p-3 text-xs"><code>{`<Modal>...</Modal>`}</code></pre>
        </div>
      </div>
    </div>
  );
}

export function DropdownDemo() {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
