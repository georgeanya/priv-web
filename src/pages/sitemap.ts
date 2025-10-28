



import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://privhealth.co'

    const res = await fetch('https://priv-health-blog.herokuapp.com/api/articles?pagination[pageSize]=500&fields[0]=title&fields[1]=slug&fields[2]=updatedAt')
    const data = await res.json()
    const posts = data.data

    const categoryRes = await fetch('https://priv-health-blog.herokuapp.com/api/categories?pagination[pageSize]=500&fields[1]=slug&fields[2]=updatedAt')
    const categoryData = await categoryRes.json()
    const categories = categoryData.data

    const blogPosts = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.attributes.slug}`,
        lastModified: post.attributes.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const categoryList = categories.map((category: any) => ({
        url: `${baseUrl}/blog/category/${category.attributes.slug}`,
        lastModified: category.attributes.updatedAt,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/what-we-treat`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/erectile-dysfunction`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/premature-ejaculation`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/sti-treatment`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/low-testosterone`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hair-loss`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/sign-up`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/doctor-consultation`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tools/do-i-have-erectile-dysfunction`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    return [...staticPages, ...blogPosts, ...categoryList]
}