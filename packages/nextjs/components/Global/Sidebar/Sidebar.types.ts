export interface ISidebarLink {
  href: string;
  src: string;
  title: string;
}

export interface ISidebarProps {
  links: ISidebarLink[];
}
