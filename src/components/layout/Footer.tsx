'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray200 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accentCyan to-purple-600 flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="font-bold text-primaryText">DoctorM&Ai</span>
            </div>
            <p className="text-gray300 text-sm">
              AI laboratory that works 24/7, building intelligent solutions for healthcare, business, and government.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-primaryText mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray300">
              <li><Link href="#" className="hover:text-accentCyan transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-accentCyan transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-accentCyan transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-accentCyan transition-colors">API</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-primaryText mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray300">
              <li><Link href="#" className="hover:text-accentCyan transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-accentCyan transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-accentCyan transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-accentCyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-primaryText mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray300">
              <li><Link href="#" className="hover:text-accentCyan transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accentCyan transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-accentCyan transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-accentCyan transition-colors">Security</Link></li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray200 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray300">
              © {currentYear} DoctorM&Ai. All rights reserved.
            </p>
            <div className="flex gap-4">
              {[
                { icon: '🐙', href: '#' },
                { icon: '🐦', href: '#' },
                { icon: '💼', href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-2xl hover:text-accentCyan transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
