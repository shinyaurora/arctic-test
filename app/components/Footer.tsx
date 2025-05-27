import {Suspense} from 'react';
import {Await, NavLink} from 'react-router';
import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export function Footer({
  footer: footerPromise,
  header,
  publicStoreDomain,
}: FooterProps) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="footer">
            {footer?.menu && header.shop.primaryDomain?.url && (
              <FooterMenu
                menu={footer.menu}
                primaryDomainUrl={header.shop.primaryDomain.url}
                publicStoreDomain={publicStoreDomain}
              />
            )}
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

function FooterMenu({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
}: {
  menu: FooterQuery['menu'];
  primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: string;
}) {
  return (
    <footer className="bg-[#F6F6F5] text-sm text-gray-700">
      <div className=" px-6 py-10 mx-auto grid grid-cols-1 md:grid-cols-7 gap-8 border-b border-gray-300 pb-8">
        {/* Subscribe Section */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-lg font-bold text-black">Be a Part of Our Journey</h3>
          <p>
            Welcome to UNCMFRT. Sign up for exclusive content and we'll send you 10% off.
          </p>
          <div className="flex mt-[30px]">
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-l-md focus:outline-none h-[50px] !mt-[0px]"
            />
            <button
              type="submit"
              className="h-[50px] px-4 py-2 bg-black text-white font-semibold rounded-r-md hover:bg-gray-800"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div>
          <h4 className="font-semibold text-black mb-2">About Us</h4>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Product Reviews</li>
            <li>Our Story</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-black mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Order Status</li>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-black mb-2">Important Link</h4>
          <ul className="space-y-1">
            <li>Maintenance</li>
            <li>Warranty</li>
            <li>Canadian Customers</li>
            <li>Setup</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-black mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Accessibility</li>
            <li>Terms of Service</li>
            <li>Affiliate Program</li>
            <li>Articles</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-1 space-y-2">
          <h4 className="font-semibold text-black mb-2">Contact Us</h4>
          <p className="text-gray-600 text-sm">Let Us Help You</p>
          <p className="text-black text-lg font-bold">(888) 860-0572</p>
          <p className="mt-4 font-semibold">Connect With Us</p>
          <div className="flex gap-4 text-xl">
            <a href="#"><i className="ri-instagram-line" /></a>
            <a href="#"><i className="ri-twitter-x-line" /></a>
            <a href="#"><i className="ri-facebook-fill" /></a>
            <a href="#"><i className="ri-youtube-fill" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-[30px] py-[20px]  mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© uncmfrt.com. All right reserved.</p>
        <p className="flex items-center gap-1 mt-2 md:mt-0">
          Made with <span>🖤</span> and ☕ by Arctic Grey
        </p>
      </div>
    </footer>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}
