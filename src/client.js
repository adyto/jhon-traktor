import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
  projectId: 'zn7ognpl',
  dataset: 'production',
  apiVersion: '2022-03-04',
  token:
    'skH759SOMgzOj7URc6S03j4oGREEj7QflSnCR1d4VZ0g2L08ut0ia3sGlN9FtbENnFpzGcckqr0ypvWuY23jzE69NP3b1ancYLHsEuPXkFCBg5TH23edx1t6VbdLzhYcb1lyUBaTmGnaYb5QAWFbG77OWXDkRtJk7WJDsBmfGOBasAv4dXjb',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
