import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { env, pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.5.0'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

// Preparation for Deno runtime
env.useBrowserCache = false
env.allowLocalModels = false

// const supabase = createClient(
//   'https://xyzcompany.supabase.co',
//   'public-anon-key',
// )

// Construct pipeline outside of serve for faster warm starts
const pipe = await pipeline(
  'feature-extraction',
  'Supabase/gte-small',
)

// Deno Handler
serve(async (req: any) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  console.log(req);
  try {


    const { input } = await req.json()

    // Generate the embedding from the user input
    const output = await pipe(input, {
      pooling: 'mean',
      normalize: true,
    })

    // Get the embedding output
    const embedding = Array.from(output.data)

    // Store the embedding
    // const { data, error } = await supabase
    //   .from('collections')
    //   .insert({ embedding })

    // Return the embedding
    return new Response(
      JSON.stringify({ embedding }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      },
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})


/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/generate-embeddings' --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' --header 'Content-Type: application/json' --data '{"input":"Functions"}' 
  */