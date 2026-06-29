import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  Compass,
  Crown,
  Download,
  Eye,
  Feather,
  Flag,
  Flame,
  Hourglass,
  Info,
  Languages,
  LucideIcon,
  Mail,
  MoreHorizontal,
  Mountain,
  Pause,
  Play,
  Plus,
  Quote,
  RotateCcw,
  Search,
  Share,
  Sparkles,
  Star,
  Sun,
  Tent,
  TrendingDown,
  Users,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';

/** Map the content's icon names (and UI names) to lucide components. */
const ICONS: Record<string, LucideIcon> = {
  // Act accents (from §2)
  sun: Sun,
  'alert-triangle': AlertTriangle,
  tent: Tent,
  flame: Flame,
  mountain: Mountain,
  flag: Flag,
  crown: Crown,
  'trending-down': TrendingDown,
  feather: Feather,
  eye: Eye,
  hourglass: Hourglass,
  star: Star,
  mail: Mail,
  // UI
  compass: Compass,
  'book-open': BookOpen,
  search: Search,
  bookmark: Bookmark,
  'bookmark-check': BookmarkCheck,
  more: MoreHorizontal,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'chevron-down': ChevronDown,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  check: Check,
  'check-circle': CheckCircle2,
  circle: Circle,
  sparkles: Sparkles,
  quote: Quote,
  plus: Plus,
  x: X,
  users: Users,
  languages: Languages,
  info: Info,
  rotate: RotateCcw,
  play: Play,
  pause: Pause,
  'volume-on': Volume2,
  'volume-off': VolumeX,
  share: Share,
  download: Download,
};

export interface IconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
  'aria-hidden'?: boolean;
}

export function Icon({ name, className, size = 20, strokeWidth = 1.75, ...rest }: IconProps) {
  const Cmp = ICONS[name] ?? Sparkles;
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} {...rest} />;
}
