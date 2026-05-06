"use client";

import * as React from "react";
import { GeneratedCode } from "@/components/generated-code";
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
    <div className="pt-3 flex justify-center">
      <Modal>
        <ModalTrigger asChild>
          <Button variant="primary">Open modal</Button>
        </ModalTrigger>
        <ModalContent variant="elevated" size="md">
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
    </div>
  );
}

export function ModalPlayground() {
  const [title, setTitle] = React.useState("Delete project");
  const [description, setDescription] = React.useState("This action cannot be undone. Please confirm to continue.");
  const [radiusPx, setRadiusPx] = React.useState(10);
  const [confirmLabel, setConfirmLabel] = React.useState("Delete");
  const [size, setSize] = React.useState<"xs" | "sm" | "md" | "lg" | "cover" | "full">("sm");
  const [placement, setPlacement] = React.useState<"center" | "top" | "bottom" | "left" | "right">("center");
  const [backdrop, setBackdrop] = React.useState<"default" | "blur" | "transparent" | "dark">("default");
  const snippet = `import {
  Button,
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger
} from "@altech-ui/react";

export function Example() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="primary">Open modal</Button>
      </ModalTrigger>
      <ModalContent
        variant="danger"
        size="${size}"
        placement="${placement}"
        backdrop="${backdrop}"
        style={{ "--altech-radius": "${radiusPx}px" } as React.CSSProperties}
      >
        <ModalHeader>
          <ModalTitle>${title}</ModalTitle>
          <ModalDescription>${description}</ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalClose asChild><Button variant="ghost">Cancel</Button></ModalClose>
          <ModalClose asChild><Button variant="danger">${confirmLabel}</Button></ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}`;

  return (
    <div className="playground-panel overflow-hidden rounded-2xl border border-black/15 bg-white dark:border-white/25 dark:bg-white/5">
      <div className="grid min-h-[320px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex items-center justify-center border-b border-black/10 p-6 lg:border-b-0 lg:border-r dark:border-white/15">
          <Modal>
            <ModalTrigger asChild>
              <Button variant="primary">Open preview modal</Button>
            </ModalTrigger>
            <ModalContent
              variant="danger"
              size={size}
              placement={placement}
              backdrop={backdrop}
              style={{ "--altech-radius": `${radiusPx}px` } as React.CSSProperties}
            >
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
          <select value={size} onChange={(e) => setSize(e.target.value as typeof size)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm">
            <option value="xs">xs</option><option value="sm">sm</option><option value="md">md</option><option value="lg">lg</option><option value="cover">cover</option><option value="full">full</option>
          </select>
          <select value={placement} onChange={(e) => setPlacement(e.target.value as typeof placement)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm">
            <option value="center">center</option><option value="top">top</option><option value="bottom">bottom</option><option value="left">left</option><option value="right">right</option>
          </select>
          <select value={backdrop} onChange={(e) => setBackdrop(e.target.value as typeof backdrop)} className="h-10 w-full rounded-lg border border-black/15 px-3 text-sm">
            <option value="default">default</option><option value="blur">blur</option><option value="transparent">transparent</option><option value="dark">dark</option>
          </select>
          <label className="grid gap-1 text-sm"><span>Radius ({radiusPx}px)</span><input type="range" min={0} max={24} value={radiusPx} onChange={(e) => setRadiusPx(Number(e.target.value))} /></label>
          <GeneratedCode code={snippet} />
        </div>
      </div>
    </div>
  );
}

export function ModalVariantsDemo() {
  const variants: Array<"default" | "elevated" | "danger" | "success"> = ["default", "elevated", "danger", "success"];
  return (
    <div className="pt-3 mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
      {variants.map((variant) => (
        <Modal key={variant}>
          <ModalTrigger asChild><Button variant="outline">{variant}</Button></ModalTrigger>
          <ModalContent variant={variant} size="sm">
            <ModalHeader><ModalTitle>{variant} modal</ModalTitle><ModalDescription>Preview variant style.</ModalDescription></ModalHeader>
            <ModalFooter><ModalClose asChild><Button variant="ghost">Close</Button></ModalClose></ModalFooter>
          </ModalContent>
        </Modal>
      ))}
    </div>
  );
}

export function ModalPlacementDemo() {
  const placements: Array<"center" | "top" | "bottom" | "left" | "right"> = ["center", "top", "bottom", "left", "right"];
  return (
    <div className="pt-3 mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
      {placements.map((placement) => (
        <Modal key={placement}>
          <ModalTrigger asChild><Button variant="secondary">{placement}</Button></ModalTrigger>
          <ModalContent placement={placement} size="sm">
            <ModalHeader><ModalTitle>{placement} placement</ModalTitle><ModalDescription>Modal anchored to {placement}.</ModalDescription></ModalHeader>
            <ModalFooter><ModalClose asChild><Button variant="ghost">Close</Button></ModalClose></ModalFooter>
          </ModalContent>
        </Modal>
      ))}
    </div>
  );
}

export function ModalBackdropDemo() {
  const backdrops: Array<"default" | "blur" | "transparent" | "dark"> = ["default", "blur", "transparent", "dark"];
  return (
    <div className="pt-3 mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
      {backdrops.map((backdrop) => (
        <Modal key={backdrop}>
          <ModalTrigger asChild><Button variant="outline">{backdrop}</Button></ModalTrigger>
          <ModalContent backdrop={backdrop} size="sm">
            <ModalHeader><ModalTitle>{backdrop} backdrop</ModalTitle><ModalDescription>Backdrop style: {backdrop}.</ModalDescription></ModalHeader>
            <ModalFooter><ModalClose asChild><Button variant="ghost">Close</Button></ModalClose></ModalFooter>
          </ModalContent>
        </Modal>
      ))}
    </div>
  );
}

export function ModalSizesDemo() {
  const sizes: Array<"xs" | "sm" | "md" | "lg" | "cover" | "full"> = ["xs", "sm", "md", "lg", "cover", "full"];
  return (
    <div className="pt-3 mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
      {sizes.map((size) => (
        <Modal key={size}>
          <ModalTrigger asChild><Button variant="primary">{size}</Button></ModalTrigger>
          <ModalContent size={size} variant="elevated">
            <ModalHeader><ModalTitle>{size} modal</ModalTitle><ModalDescription>Size preset: {size}.</ModalDescription></ModalHeader>
            <div className="space-y-2 text-sm opacity-80">
              <p>Use this template for forms, content preview, or full-screen workflows.</p>
              <p>Developers can copy this pattern and swap content quickly.</p>
            </div>
            <ModalFooter><ModalClose asChild><Button variant="ghost">Close</Button></ModalClose></ModalFooter>
          </ModalContent>
        </Modal>
      ))}
    </div>
  );
}

export function ModalPatternsDemo() {
  return (
    <div className="pt-3 mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
      <Modal>
        <ModalTrigger asChild><Button variant="outline">Confirm Delete</Button></ModalTrigger>
        <ModalContent variant="danger" size="sm">
          <ModalHeader><ModalTitle>Delete item</ModalTitle><ModalDescription>This action is permanent.</ModalDescription></ModalHeader>
          <ModalFooter><ModalClose asChild><Button variant="ghost">Cancel</Button></ModalClose><Button variant="danger">Delete</Button></ModalFooter>
        </ModalContent>
      </Modal>
      <Modal>
        <ModalTrigger asChild><Button variant="outline">Success Result</Button></ModalTrigger>
        <ModalContent variant="success" size="sm">
          <ModalHeader><ModalTitle>Saved</ModalTitle><ModalDescription>Your changes were saved successfully.</ModalDescription></ModalHeader>
          <ModalFooter><ModalClose asChild><Button variant="primary">Done</Button></ModalClose></ModalFooter>
        </ModalContent>
      </Modal>
      <Modal>
        <ModalTrigger asChild><Button variant="outline">Long Form</Button></ModalTrigger>
        <ModalContent variant="default" size="lg">
          <ModalHeader><ModalTitle>Edit Project</ModalTitle><ModalDescription>Update metadata and team access.</ModalDescription></ModalHeader>
          <div className="grid gap-3">
            <input className="h-10 rounded-lg border border-black/15 px-3 text-sm dark:border-white/20 dark:bg-black/20" placeholder="Project name" />
            <textarea className="min-h-24 rounded-lg border border-black/15 px-3 py-2 text-sm dark:border-white/20 dark:bg-black/20" placeholder="Description" />
          </div>
          <ModalFooter><ModalClose asChild><Button variant="ghost">Cancel</Button></ModalClose><Button variant="primary">Save</Button></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export function DropdownDemo() {
  return (
    <div className="pt-3 flex justify-center">
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="outline">Open menu</Button>
        </DropdownTrigger>
        <DropdownContent variant="elevated">
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem variant="danger">Sign out</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  );
}
