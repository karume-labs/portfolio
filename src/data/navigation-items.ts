import {
  Award,
  Briefcase,
  Code,
  Home,
  Library,
  type LucideIcon,
  Mail,
  Stars,
  ThumbsUp,
  User,
} from "lucide-react";
import type { Route } from "next";

export interface NavigationItem {
  href: Route;
  label: string;
  icon: LucideIcon;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#bio", label: "Bio", icon: User },
  { href: "/#certifications", label: "Certs", icon: Award },
  { href: "/#experience", label: "Exp", icon: Briefcase },
  { href: "/#recommendations", label: "Refs", icon: ThumbsUp },
  { href: "/#projects", label: "Projects", icon: Code },
  { href: "/#blogs", label: "Blogs", icon: Library },
  { href: "/#inspos", label: "Inspos", icon: Stars },
  { href: "/#reach-out", label: "Contact", icon: Mail },
];
