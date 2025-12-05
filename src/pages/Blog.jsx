import MyContainer from "../components/MyContainer";

const Blog = () => {
  const posts = [
    {
      title: "How to Own Your Audience by Creating an Email List",
      excerpt:
        "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBQn65x5m5NS9p9ncndkF-u_2S_A8S_Qj_mY_m-GEzstJapDmwkCqS27B7aN_4ieWRCT9OFQNcdBC3xt1VcPgdOO5hBqwp29GGRdm1XA6uAqfKVCtvqdwK52NTB9uzt2grl4M_ZyMohOfYo4QZCgpOVZyYJC935aW7EUuYglM9W3RGvBjMx2MhcSepT0m4qsBKphcy1NxlTKqSKkEQQOHZSfXguIoF63JzDDYs9HmLc8tSwaPrFSQC4xf075AkYmxMq9Rfz6NjdV_s",
    },
    {
      title: "Top 10 Toolkits for Deep Learning in 2022",
      excerpt:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDe4XiLCpnUFHUXxvKSExRAyF7VIfd9esg-RRnpU8sUCvrNvszaN-C8u0qFq2oVtkEjxN0qS5T4YnqycFCgKr2Pp9hePDgQ43reCm_5N0mQ7Ghdh7Js13GYKGyrnfmHHbhspMR6elfY4UlhBocgdxzkACXsAS-fXQ9dYfvVpIT3wf_eSA54k6DcjmjH4WECdh_q5O1iL_bcUk9ZEZiV63NQ2dZWzuG1LNqkbp5FP13WjFC55l-m89LPv_oRIXmO6NiYpx-uuo7_HNc",
    },
    {
      title: "Everything You Need to Know About Web Accessibility",
      excerpt:
        "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-4lSkVt3WgBy08FNbLBkFCHAXS7fQosfGS9bEdtkXE0I4NCMmpv38MOl5HZYcXFR7JnQWxpQMcsebdJ14OX-SWrge0LC36zhUr9IrdNgSB9_hJiRl0TXb4t1ceMgRLLOmcVpm8GvMRFqfuYsWMTUZDS8Dy0t85WLzj2iHz9PpNO0wftm0jtJPc4RrQyGAUhg7wi_AFJbviiHnIQcKiafX98QSxYyDR5GFvzzjPmVGcpKrO4Clx2mbiJtnlfI4R94KaPaDyeYc6vE",
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <MyContainer>
        <div className="px-4 md:px-10 py-20 md:pt-12">
          <div className="relative text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              MY <span className="text-primary">BLOG</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  src={post.image}
                />
                <div className="p-6">
                  <div className="h-1 bg-primary mb-4"></div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Blog;
