// Discovered a magic formula to have next/image modules responsive without forcing a fixed size:

;<div className="relative h-[300px] w-full overflow-hidden rounded-lg">
  <Image fill src={src} alt="img" className="w-full object-cover" />
</div>
