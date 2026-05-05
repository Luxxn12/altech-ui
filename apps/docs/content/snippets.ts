export const snippets = {
  button: `import { Button } from "@altech-ui/react";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button isLoading>Loading</Button>
    </div>
  );
}`,
  input: `import { Input } from "@altech-ui/react";

export function InputDemo() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter your email" />
      <Input label="Email" placeholder="email@example.com" />
      <Input label="Email" error="Email is required" />
      <Input label="Disabled" isDisabled value="locked@example.com" />
    </div>
  );
}`,
  table: `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@altech-ui/react";

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Lukman</TableCell>
          <TableCell>lukman@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`,
  modal: `import {
  Button,
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@altech-ui/react";

export function ModalDemo() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="primary">Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Delete Project</ModalTitle>
          <ModalDescription>
            This action cannot be undone.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <Button variant="ghost">Cancel</Button>
          <Button variant="danger">Delete</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}`,
  card: `import { Card, CardContent, CardFooter, CardHeader, Button } from "@altech-ui/react";

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Pro Plan</h3>
        <p className="text-sm opacity-70">Perfect for growing teams</p>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">$24/mo</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Upgrade</Button>
      </CardFooter>
    </Card>
  );
}`
};
