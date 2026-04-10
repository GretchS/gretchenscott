import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Security utilities for input sanitization and validation
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') return '';

  return input
    // Remove HTML tags
    .replace(/<[^>]*>/g, '')
    // Remove script tags and their content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove javascript: URLs
    .replace(/javascript:/gi, '')
    // Remove data: URLs that might contain scripts
    .replace(/data:text\/html/gi, '')
    // Remove on* event handlers
    .replace(/on\w+\s*=/gi, '')
    // Trim whitespace
    .trim()
    // Limit length to prevent DoS
    .substring(0, 10000);
}

export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;

  // Basic email validation regex (not perfect but covers most cases)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Additional security checks
  if (email.length > 254) return false; // RFC 5321 limit
  if (email.includes('<script') || email.includes('javascript:') || email.includes('data:')) return false;

  return emailRegex.test(email);
}

export function validateMessage(message: string): boolean {
  if (!message || typeof message !== 'string') return false;

  // Check length limits
  if (message.length < 10) return false; // Minimum meaningful message
  if (message.length > 5000) return false; // Prevent DoS

  // Check for suspicious patterns
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /data:text/i,
    /vbscript:/i,
    /onload=/i,
    /onerror=/i
  ];

  return !suspiciousPatterns.some(pattern => pattern.test(message));
}

export function sanitizeUrl(url: string): string {
  if (!url || typeof url !== 'string') return '';

  // Only allow http/https URLs
  if (!/^https?:\/\//i.test(url)) return '';

  // Remove dangerous characters
  return url.replace(/[<>"']/g, '');
}
