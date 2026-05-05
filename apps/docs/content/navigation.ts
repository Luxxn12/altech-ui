export type NavItem = {
  title: string;
  href: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
      { title: "Dark Mode", href: "/docs/dark-mode" }
    ]
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Table", href: "/docs/components/table" },
      { title: "Modal", href: "/docs/components/modal" },
      { title: "Card", href: "/docs/components/card" }
    ]
  }
];
