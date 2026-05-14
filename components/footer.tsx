import { Beaker } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <Beaker className="w-5 h-5 text-secondary-foreground" />
              </div>
              <span className="font-bold text-xl text-primary-foreground">Virucidine</span>
            </div>
            <p className="text-sm text-primary-foreground/75">
              Advanced herbal clinical research platform
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-primary-foreground/75">
              © 2024 Virucidine. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition text-sm">
                Privacy
              </a>
              <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition text-sm">
                Terms
              </a>
              <a href="#" className="text-primary-foreground/75 hover:text-primary-foreground transition text-sm">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
