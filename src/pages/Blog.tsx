import React, { useState } from 'react';
import { Calendar, User, Clock, Tag, ChevronRight, Search } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'care-tips', name: 'Care Tips' },
    { id: 'seasonal', name: 'Seasonal' },
    { id: 'stain-removal', name: 'Stain Removal' },
    { id: 'fabric-guide', name: 'Fabric Guide' },
    { id: 'company-news', name: 'Company News' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Complete Guide to Winter Garment Care',
      slug: 'winter-garment-care-guide',
      excerpt: 'Learn how to properly care for your winter clothes including wool coats, cashmere scarves, and heavy jackets to ensure they last for years.',
      content: 'Winter garments require special care due to their unique fabrics and construction...',
      category: 'seasonal',
      author: 'Priya Sharma',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg',
      tags: ['winter', 'wool', 'cashmere', 'care tips']
    },
    {
      id: 2,
      title: 'How to Remove Common Food Stains',
      slug: 'remove-common-food-stains',
      excerpt: 'Emergency stain removal tips for oil, wine, coffee, and other common food stains. Learn what to do before bringing your clothes to us.',
      content: 'Food stains are inevitable, but knowing how to treat them immediately...',
      category: 'stain-removal',
      author: 'Rajesh Kumar',
      date: '2024-01-12',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/5842510/pexels-photo-5842510.jpeg',
      tags: ['stains', 'food', 'emergency', 'DIY']
    },
    {
      id: 3,
      title: 'Understanding Fabric Labels: A Complete Guide',
      slug: 'understanding-fabric-labels',
      excerpt: 'Decode those mysterious symbols on your clothing labels and learn what they mean for proper garment care.',
      content: 'Fabric care labels contain valuable information about how to properly clean...',
      category: 'fabric-guide',
      author: 'Anita Singh',
      date: '2024-01-10',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/5842517/pexels-photo-5842517.jpeg',
      tags: ['labels', 'fabric', 'symbols', 'education']
    },
    {
      id: 4,
      title: 'Wedding Dress Preservation: Before and After',
      slug: 'wedding-dress-preservation',
      excerpt: 'Comprehensive guide to preserving your wedding dress, from immediate post-wedding care to long-term storage solutions.',
      content: 'Your wedding dress is one of the most precious garments you\'ll ever own...',
      category: 'care-tips',
      author: 'Meera Gupta',
      date: '2024-01-08',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
      tags: ['wedding', 'preservation', 'storage', 'special care']
    },
    {
      id: 5,
      title: 'Eco-Friendly Dry Cleaning: Our Green Initiative',
      slug: 'eco-friendly-dry-cleaning',
      excerpt: 'Learn about our commitment to environmental sustainability and the eco-friendly cleaning processes we use.',
      content: 'At Decent Drycleaners, we believe in protecting both your clothes and the environment...',
      category: 'company-news',
      author: 'Vikram Mehta',
      date: '2024-01-05',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/5842513/pexels-photo-5842513.jpeg',
      tags: ['eco-friendly', 'green', 'sustainability', 'environment']
    },
    {
      id: 6,
      title: 'Caring for Silk: Do\'s and Don\'ts',
      slug: 'caring-for-silk-garments',
      excerpt: 'Silk requires special attention. Learn the proper way to handle, clean, and store silk garments to maintain their beauty.',
      content: 'Silk is one of the most luxurious and delicate fabrics, requiring specialized care...',
      category: 'fabric-guide',
      author: 'Kavya Reddy',
      date: '2024-01-03',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/5842508/pexels-photo-5842508.jpeg',
      tags: ['silk', 'luxury', 'delicate', 'care tips']
    },
    {
      id: 7,
      title: 'Spring Cleaning: Refreshing Your Wardrobe',
      slug: 'spring-wardrobe-refresh',
      excerpt: 'Tips for transitioning your wardrobe from winter to spring, including proper storage and cleaning of seasonal items.',
      content: 'As spring arrives, it\'s time to refresh your wardrobe and properly store winter items...',
      category: 'seasonal',
      author: 'Arjun Patel',
      date: '2024-01-01',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/5842512/pexels-photo-5842512.jpeg',
      tags: ['spring', 'wardrobe', 'storage', 'organization']
    },
    {
      id: 8,
      title: 'Professional vs Home Cleaning: When to Choose What',
      slug: 'professional-vs-home-cleaning',
      excerpt: 'Understand when you can handle garment care at home and when it\'s better to trust the professionals.',
      content: 'While some garments can be safely cleaned at home, others require professional expertise...',
      category: 'care-tips',
      author: 'Rohit Sharma',
      date: '2023-12-28',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/7214179/pexels-photo-7214179.jpeg',
      tags: ['professional', 'DIY', 'comparison', 'advice']
    }
  ];

  const featuredPost = blogPosts[0];

  const getFilteredPosts = () => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).slice(1); // Exclude featured post
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0096c7] to-[#007ba3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Garment Care Blog
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Expert tips, care guides, and insights from our team of professionals. 
            Learn how to keep your clothes looking their best between visits.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-[#0096c7] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#333333] mb-2">Featured Article</h2>
            <p className="text-gray-600">Our latest insights and expert advice</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-[#0096c7] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === featuredPost.category)?.name}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(featuredPost.date)}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>{featuredPost.author}</span>
                    <Clock className="w-4 h-4 ml-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <button className="bg-[#0096c7] text-white px-6 py-2 rounded-lg hover:bg-[#007ba3] transition-colors duration-200 flex items-center">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-2">Latest Articles</h2>
            <p className="text-gray-600">Discover expert tips and insights for garment care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredPosts().map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0096c7] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(post.date)}</span>
                    <Clock className="w-4 h-4 ml-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#333333] mb-3 hover:text-[#0096c7] transition-colors duration-200 cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        <Tag className="w-3 h-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    
                    <button className="text-[#0096c7] font-semibold hover:text-[#007ba3] transition-colors duration-200 flex items-center">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {getFilteredPosts().length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">
                No articles found matching your search.
              </p>
              <p className="text-gray-500">
                Try adjusting your search terms or browse all categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-[#b5ead7] to-[#a8e6cf]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Subscribe to our newsletter for the latest garment care tips, 
            seasonal advice, and exclusive offers.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-[#0096c7] focus:border-transparent"
              />
              <button className="bg-[#0096c7] text-white px-8 py-4 rounded-r-lg hover:bg-[#007ba3] transition-colors duration-200 font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Popular Topics
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, index) => (
              <button
                key={index}
                onClick={() => setSearchTerm(tag)}
                className="bg-gray-100 hover:bg-[#0096c7] hover:text-white text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
              >
                <Tag className="w-4 h-4 mr-1" />
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;