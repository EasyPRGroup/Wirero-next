import type { CSSProperties, ReactNode } from "react";

// ============================================
// Common prop types for shared components
// ============================================

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

// ============================================
// UserOutlined Component (CTA Button)
// ============================================

export interface UserOutlinedProps extends BaseComponentProps {
  /** Show the button */
  showUserOutlined?: boolean;
  /** Icon source */
  userOutlined?: string;
  /** Show icon */
  showUserOutlinedIcon?: boolean;
  /** Button text */
  cTAButton?: string;
  /** Arrow icon source */
  arrowRight?: string;
  /** Show arrow icon */
  showArrowRightIcon?: boolean;
  /** Variant */
  property1?: string;
  /** Button style props */
  userOutlinedBorder?: CSSProperties["border"];
  userOutlinedPadding?: CSSProperties["padding"];
  userOutlinedBackgroundColor?: CSSProperties["backgroundColor"];
  userOutlinedHeight?: CSSProperties["height"];
  cTAButtonFontSize?: CSSProperties["fontSize"];
  cTAButtonColor?: CSSProperties["color"];
  cTAButtonMargin?: CSSProperties["margin"];
}

// ============================================
// Option Component (Navigation Item)
// ============================================

export interface OptionProps extends BaseComponentProps {
  showOption?: boolean;
  features?: string;
  property1?: string;
}

// ============================================
// Header Component
// ============================================

export interface HeaderProps extends BaseComponentProps {
  property1?: string;
}

// ============================================
// ItemMenu Component (Footer Links)
// ============================================

export interface ItemMenuProps extends BaseComponentProps {
  showItemMenu?: boolean;
  aboutUs?: string;
  property1?: string;
  itemMenuAlignSelf?: CSSProperties["alignSelf"];
  itemMenuWidth?: CSSProperties["width"];
}

// ============================================
// FrameComponent (Feature Card)
// ============================================

export interface FrameComponentProps extends BaseComponentProps {
  independentDomains?: string;
  frameDivAlignItems?: CSSProperties["alignItems"];
  textWidth?: CSSProperties["width"];
  frameDivMargin?: CSSProperties["margin"];
  independentDomainsMinWidth?: CSSProperties["minWidth"];
  independentDomainsMargin?: CSSProperties["margin"];
}

// ============================================
// HowItWorks (Step Card)
// ============================================

export interface HowItWorksProps extends BaseComponentProps {
  rectangle11?: string;
  prop?: string;
  submitYourPressRelease?: string;
  property1?: string;
}

// ============================================
// FrameComponent1 (Network Card)
// ============================================

export interface FrameComponent1Props extends BaseComponentProps {
  eFCBBCFDF?: string;
  newsmax?: string;
  property1?: string;
  networkOverflow?: CSSProperties["overflow"];
}

// ============================================
// Blockchain (Category Button)
// ============================================

export interface BlockchainProps extends BaseComponentProps {
  property1?: string;
  blockchainBorder?: CSSProperties["border"];
  blockchainIconHeight?: CSSProperties["height"];
  blockchainIconMaxHeight?: CSSProperties["maxHeight"];
  nameGap?: CSSProperties["gap"];
  nameWidth?: CSSProperties["width"];
  nameBorder?: CSSProperties["border"];
  nameOutline?: CSSProperties["outline"];
  nameBackgroundColor?: CSSProperties["backgroundColor"];
  nameFontFamily?: CSSProperties["fontFamily"];
  nameFontWeight?: CSSProperties["fontWeight"];
  nameFontSize?: CSSProperties["fontSize"];
  nameColor?: CSSProperties["color"];
}

// ============================================
// Agencies (Feature Card)
// ============================================

export interface AgenciesProps extends BaseComponentProps {
  dedicatedProjectMa?: string;
  withLotsOfUnique?: string;
  solarglobalBoldIconMaxHeight?: CSSProperties["maxHeight"];
  solarglobalBoldIconHeight?: CSSProperties["height"];
}

// ============================================
// Component1 (Why Choose Us Item)
// ============================================

export interface Component1Props extends BaseComponentProps {
  icLayers48px?: string;
  dedicatedProjectMa?: string;
  withLotsOfUnique?: string;
  divPadding?: CSSProperties["padding"];
  divBorderBottom?: CSSProperties["borderBottom"];
  iconPadding?: CSSProperties["padding"];
  icLayers48pxIconHeight?: CSSProperties["height"];
  icLayers48pxIconMaxHeight?: CSSProperties["maxHeight"];
}

// ============================================
// Points (Feature Cards Grid)
// ============================================

export interface PointsProps extends BaseComponentProps {
  image91?: string;
  showImage91Icon?: boolean;
  dedicatedProjectMa?: string;
  withLotsOfUnique?: string;
  image92?: string;
  showImage92Icon?: boolean;
  dedicatedProjectMa1?: string;
  withLotsOfUnique1?: string;
  image90?: string;
  showImage90Icon?: boolean;
  dedicatedProjectMa2?: string;
  withLotsOfUnique2?: string;
  image93?: string;
  showImage93Icon?: boolean;
  dedicatedProjectMa3?: string;
  withLotsOfUnique3?: string;
  // Style props
  pointsWidth?: CSSProperties["width"];
  pointsAlignSelf?: CSSProperties["alignSelf"];
  groupDivHeight?: CSSProperties["height"];
  groupDivWidth?: CSSProperties["width"];
  groupDivBackgroundImage?: CSSProperties["backgroundImage"];
  groupDivBackgroundSize?: CSSProperties["backgroundSize"];
  frameDivMinWidth?: CSSProperties["minWidth"];
  dedicatedProjectMaMargin?: CSSProperties["margin"];
  // ... repeated for each card (1, 2, 3)
}

// ============================================
// Testimonials
// ============================================

export interface TestimonialsProps extends BaseComponentProps {
  image83?: string;
  property1?: string;
}

// ============================================
// Footer
// ============================================

export interface FooterProps extends BaseComponentProps {
  property1?: string;
}

// ============================================
// BannerHeader
// ============================================

export interface BannerheaderProps extends BaseComponentProps {}

// ============================================
// Simple component types (just extend BaseComponentProps)
// These don't need additional props beyond className
// ============================================

export type AboutProps = BaseComponentProps;
export type ClientsProps = BaseComponentProps;
export type StepProps = BaseComponentProps;
export type CtaSectionProps = BaseComponentProps;
export type CtaSection1Props = BaseComponentProps;
export type WhyChooseUsProps = BaseComponentProps;
export type ListProps = BaseComponentProps;
export type TitleProps = BaseComponentProps;
export type FrameComponent2Props = BaseComponentProps;
export type FrameComponent3Props = BaseComponentProps;
export type FrameComponent4Props = BaseComponentProps;
export type FrameComponent5Props = BaseComponentProps;
export type FrameComponent6Props = BaseComponentProps;
export type PressReleasesProps = BaseComponentProps;
