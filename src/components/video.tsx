interface VideoProps {
  url: string;
  title?: string;
}

function getEmbedUrl(url: string): string | null {
  // YouTube: youtube.com/watch?v=ID  youtu.be/ID  youtube.com/embed/ID
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?rel=0`;

  // Vimeo: vimeo.com/ID
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;

  return null;
}

export default function Video({ url, title = "Video" }: VideoProps) {
  const embedUrl = getEmbedUrl(url);

  if (!embedUrl) {
    return (
      <div className="my-6 rounded-lg border border-border p-4 text-sm text-muted-foreground">
        Could not embed:{" "}
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </div>
    );
  }

  return (
    <div className="relative my-6 w-full overflow-hidden rounded-lg border border-border aspect-video">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
