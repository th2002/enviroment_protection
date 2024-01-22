/* eslint-disable react/no-unknown-property */
function SidebarRight() {
  return (
    <div>
      <h1 className="mb-5 text-sm font-semibold">Video hướng dẫn deloy code</h1>
      <div className="flex flex-col gap-5">
        <iframe
          width="260"
          height="150"
          src="https://www.youtube.com/embed/mP8KIAros70?si=YsOmQGzM94wsWYZS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="260"
          height="150"
          src="https://www.youtube.com/embed/X6boIuWzBhg?si=x8pAqyA0cdxb8mFy"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="260"
          height="150"
          src="https://www.youtube.com/embed/8nTcV6zH7eY?si=0JOq9iXopftuJN3z"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default SidebarRight;
